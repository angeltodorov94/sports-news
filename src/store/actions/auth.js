import * as actionTypes from './actionTypes'
import { getUserInformationSuccess } from './index'
import axios from 'axios'

export const authenticationInit = (email, password, action) => {
    return dispatch => {
        dispatch(authStart())
        axios.post(`http://localhost:9999/api/user/${action}`, { email, password })
            .then(response => {
                if (response.status === 500) {
                    if (action === 'register')
                        throw new Error('The email is already taken!')
                    if (action === 'login')
                        throw new Error('Wrong email or password!')
                }
                const token = response.headers["authorization"]
                const expirationDate = new Date(new Date().getTime() + 3600 * 24 * 7 * 1000)
                localStorage.setItem('x-auth-token', token)
                localStorage.setItem('expiration-date', expirationDate)
                dispatch(authSuccess(token, { id: response.data._id, isAdmin: response.data.isAdmin }))
                dispatch(getUserInformationSuccess(response.data))
            }).catch(err => {
                dispatch(authFailed(err.message))
                setTimeout(() => {
                    dispatch(removeError())
                }, 3000)
            })
    }
}

export const logout = () => {
    localStorage.removeItem('x-auth-token')
    localStorage.removeItem('expiration-date')
    return dispatch => {
        dispatch(actionLogout())
        dispatch(cleanUserInfo())
    }
}

export const checkAuthenticationStatus = () => {
    return dispatch => {
        const token = localStorage.getItem('x-auth-token')
        const expTime = new Date(localStorage.getItem('expiration-date'))
        if (!token || expTime < new Date()) {
            dispatch(logout())
        }
        else {
            axios.post(`http://localhost:9999/api/user/verifyToken`, { token })
                .then(response => {
                    if (response.data.status === false)
                        dispatch(logout())
                    else {
                        dispatch(getUserInformationSuccess(response.data.user))
                        dispatch(authSuccess(token, { id: response.data.user._id, isAdmin: response.data.user.isAdmin }))
                        dispatch(checkAuthTimeout((expTime.getTime() - new Date().getTime()) / 1000))
                    }
                })
        }
    }
}

// ----------------------------------------

const authSuccess = (token, userData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token,
        id: userData.id,
        isAdmin: userData.isAdmin
    }
}

const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

const authFailed = (err) => {
    return {
        type: actionTypes.AUTH_FAILED,
        err
    }
}

const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000)
    }
}

const removeError = () => {
    return {
        type: actionTypes.REMOVE_ERROR
    }
}

const actionLogout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

const cleanUserInfo = () => {
    return {
        type: actionTypes.CLEAN_USER_INFO
    }
}