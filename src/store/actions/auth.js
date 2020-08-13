import * as actionTypes from './actionTypes'
import { getUserInformationSuccess } from './index'

export const authenticationInit = (email, password, action) => {
    return dispatch => {
        dispatch(authStart())

        fetch(`http://localhost:9999/api/user/${action}`, {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        }).then(promise => {
            if (promise.status === 500) {
                if (action === 'register')
                    throw new Error('The email is already taken!')
                if (action === 'login')
                    throw new Error('Wrong email or password!')
            }

            const token = promise.headers.get("Authorization")
            const expirationDate = new Date(new Date().getTime() + 3600 * 24 * 7 * 1000)
            localStorage.setItem('x-auth-token', token)
            localStorage.setItem('expiration-date', expirationDate)
            return Promise.all([token, promise.json()])
        }).then(([token, response]) => {
            dispatch(authSuccess(token, { id: response._id, isAdmin: response.isAdmin }))
            dispatch(getUserInformationSuccess(response))
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
        if (!token || expTime < new Date())
            dispatch(logout())
        else {
            fetch(`http://localhost:9999/api/user/verifyToken`, {
                method: 'POST',
                body: JSON.stringify({ token }),
                headers: { 'Content-Type': 'application/json' }
            }).then(promise => promise.json())
                .then(response => {
                    if (response.status === false)
                        dispatch(logout())
                    else {
                        dispatch(authSuccess(token, { id: response.user._id, isAdmin: response.user.isAdmin }))
                        dispatch(getUserInformationSuccess(response.user))
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