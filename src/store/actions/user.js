import * as actionTypes from './actionTypes'
import { logout } from './index'
import axios from 'axios'

export const getUserInformation = () => {
    return dispatch => {
        dispatch(getUserInformationStart())
        axios.get(`/user`)
            .then(response => {
                if (response.status >= 400) throw new Error("Something Went Wrong!")
                dispatch(getUserInformationSuccess(response.data))
            }).catch(err => dispatch(getUserInformationFailed(err.message)))
    }
}

export const updateUserInformation = (data) => {
    return dispatch => {
        dispatch(getUserInformationStart())
        axios.patch(`/user`, data)
            .then(response => dispatch(getUserInformationSuccess(response.data)))
            .catch(err => {
                dispatch(getUserInformationFailed("Email is already taken!"))
                setTimeout(() => {
                    dispatch(removeError())
                }, 3000)
            })
    }
}

export const deleteUser = () => {
    return dispatch => {
        axios.delete(`/user`)
            .then(() => dispatch(logout()))
            .catch(err => 'Something went wrong!')
    }
}

// -------------------------------------------------------

const getUserInformationStart = () => {
    return {
        type: actionTypes.GET_USER_INFO_START
    }
}

export const getUserInformationSuccess = (dataObj) => {
    return {
        type: actionTypes.GET_USER_INFO_SUCCESS,
        userDetails: {
            email: dataObj.email,
            username: dataObj.username,
            profilePicture: dataObj.profilePicture,
            savedArticles: [...dataObj.savedArticles],
            postedComments: [...dataObj.postedComments],
        }
    }
}

const getUserInformationFailed = (err) => {
    return {
        type: actionTypes.GET_USER_INFO_FAILED,
        err
    }
}

const removeError = () => {
    return {
        type: actionTypes.REMOVE_ERROR
    }
}