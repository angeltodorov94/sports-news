import * as actionTypes from './actionTypes'

export const getUserInformation = id => {
    return dispatch => {
        dispatch(getUserInformationStart())
        fetch('http://localhost:9999/api/user/' + id)
            .then(response => {
                if (response.status >= 400) throw new Error("Something Went Wrong!")
                return response.json()
            })
            .then(response => dispatch(getUserInformationSuccess(response)))
            .catch(err => dispatch(getUserInformationFailed(err.message)))
    }
}

export const getAllUsersInformation = () => {
    return dispatch => {
        dispatch(getAllUsersInformationStart())
        fetch('http://localhost:9999/api/user/')
            .then(response => {
                if (response.status >= 400) throw new Error("Something Went Wrong!")
                return response.json()
            })
            .then(response => dispatch(getAllUsersInformationSuccess(response)))
            .catch(err => dispatch(getAllUsersInformationFailed(err.message)))
    }
}

export const updateUserInformation = (id, data) => {
    return dispatch => {
        dispatch(getUserInformationStart())
        fetch(`http://localhost:9999/api/user/${id}`, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        }).then(response => response.json())
            .then(response => dispatch(getUserInformationSuccess(response)))
            .catch(err => {
                dispatch(getUserInformationFailed("Email is already taken!"))
                setTimeout(() => {
                    dispatch(removeError())
                }, 3000)
            })
    }
}

export const deleteUser = (id) => {
    return dispatch => {
        fetch(`http://localhost:9999/api/user/${id}`, { method: "DELETE" })
            .catch(err => 'Something went wrong!')
    }
}

// -------------------------------------------------------

const getUserInformationStart = () => {
    return {
        type: actionTypes.GET_USER_INFO_START
    }
}

const getAllUsersInformationStart = () => {
    return {
        type: actionTypes.GET_ALL_USERS_INFO_START
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

const getAllUsersInformationSuccess = (dataObj) => {
    return {
        type: actionTypes.GET_ALL_USERS_INFO_SUCCESS,
        allUsers: dataObj
    }
}

const getUserInformationFailed = (err) => {
    return {
        type: actionTypes.GET_USER_INFO_FAILED,
        err
    }
}

const getAllUsersInformationFailed = (err) => {
    return {
        type: actionTypes.GET_ALL_USERS_INFO_FAILED,
        err
    }
}

const removeError = () => {
    return {
        type: actionTypes.REMOVE_ERROR
    }
}