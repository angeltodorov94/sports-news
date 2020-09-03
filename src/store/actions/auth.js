import * as actionTypes from './actionTypes'
import { getUserInformationSuccess } from './index'
import axios from 'axios'

export const authenticationInit = (data, action) => {
    return dispatch => {
        dispatch(authStart())
        axios.post(`http://localhost:9999/api/user/${action}`, data)
            .then(response => {
                const token = response.headers["authorization"]
                const expirationDate = new Date(new Date().getTime() + 3600 * 24 * 7 * 1000)
                localStorage.setItem('x-auth-token', token)
                localStorage.setItem('expiration-date', expirationDate)
                dispatch(authSuccess({ id: response.data._id, isAdmin: response.data.isAdmin }))
                dispatch(getUserInformationSuccess(response.data))
            }).catch(err => {
                dispatch(authFailed(err.response.data))
                setTimeout(() => {
                    dispatch(removeError())
                }, 3000)
            })
    }
}

export const checkAuthenticationStatus = () => {
    return dispatch => {
        const expiration_date = localStorage.getItem('expiration-date')
        if (expiration_date < new Date())
            return dispatch(logout())

        axios.post(`http://localhost:9999/api/user/verifyToken`)
            .then(response => {
                if (response.data === '')
                    return dispatch(logout())

                dispatch(getUserInformationSuccess(response.data))
                dispatch(authSuccess({ id: response.data._id, isAdmin: response.data.isAdmin }))
                dispatch(checkAuthTimeout((expiration_date.getTime() - new Date().getTime()) / 1000))
            }).catch(err => console.log(err))
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

// ----------------------------------------

const authSuccess = (userData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
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