import * as actionTypes from './actionTypes'
import axios from 'axios'

export const getAllArticles = () => {
    return dispatch => {
        dispatch(processStart())
        axios.get('/admin/article')
            .then(response => dispatch(getAllArticlesSuccess(response.data)))
            .catch(err => dispatch(processFailed('Something went wrong!')))
    }
}

export const createArticle = data => {
    return dispatch => {
        dispatch(processStart())
        axios.post('/admin/article', data)
            .then(() => dispatch(postArticleSuccess()))
            .catch(err => dispatch(processFailed('Something went wrong!')))
    }
}

export const deleteArticle = id => {
    return dispatch => {
        axios.delete(`/admin/article/${id}`)
            .catch(err => 'Something went wrong!')
    }
}

export const getAllUsersInformation = () => {
    return dispatch => {
        dispatch(processStart())
        axios.get('/admin/users')
            .then(response => {
                if (response.status >= 400) throw new Error("Something Went Wrong!")
                dispatch(getAllUsersSuccess(response.data))
            })
            .catch(err => dispatch(processFailed(err.message)))
    }
}

export const admin_updateUserInformation = (id, data) => {
    return dispatch => {
        axios.patch(`/admin/user/${id}`)
            .catch(err => 'Something went wrong!')
    }
}

export const admin_deleteUser = (id) => {
    return dispatch => {
        axios.delete(`/admin/user/${id}`)
            .catch(err => 'Something went wrong!')
    }
}

// -------------------------------------------------------------------

const postArticleSuccess = () => {
    return {
        type: actionTypes.POST_ARTICLE_SUCCESS
    }
}

const getAllUsersSuccess = (dataObj) => {
    return {
        type: actionTypes.GET_ALL_USERS_SUCCESS,
        allUsers: dataObj
    }
}

const getAllArticlesSuccess = (dataObj) => {
    return {
        type: actionTypes.GET_ALL_ARTICLES_SUCCESS,
        allArticles: dataObj
    }
}

const processStart = () => {
    return {
        type: actionTypes.ADMIN_PROCESS_START
    }
}

const processFailed = (err) => {
    return {
        type: actionTypes.ADMIN_PROCESS_FAILED,
        err
    }
}