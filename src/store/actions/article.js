import * as actionTypes from './actionTypes'
import axios from 'axios'

export const getArticle = id => {
    return (dispatch, getState) => {
        if (getState().article.data === null)
            dispatch(getArticleStart())

        axios.get(`/article/${id}`)
            .then(response => dispatch(getArticleSuccess(response.data)))
            .catch(err => dispatch(getArticleError()))
    }
}

export const changeToggle = () => {
    return {
        type: actionTypes.TOGGLE_COMMENT_SECTION
    }
}

export const cleanArticleState = () => {
    return {
        type: actionTypes.CLEAN_ARTICLE
    }
}

export const createArticle = data => {
    return dispatch => {
        dispatch(postArticleStart())
        axios.post('/article', data)
            .then(() => dispatch(postArticleSuccess()))
            .catch(err => dispatch(postArticleFailed('Something went wrong!')))
    }
}

export const deleteArticle = id => {
    return dispatch => {
        axios.delete(`/article/${id}`)
            .catch(err => 'Something went wrong!')
    }
}

// -------------------------------------------------------

const getArticleStart = () => {
    return {
        type: actionTypes.GET_ARTICLE_START
    }
}

const getArticleSuccess = (article) => {
    return {
        type: actionTypes.GET_ARTICLE_SUCCESS,
        data: article
    }
}

const getArticleError = () => {
    return {
        type: actionTypes.GET_ARTICLE_FAILED,
        err: "Something Went Wrong!"
    }
}

const postArticleStart = () => {
    return {
        type: actionTypes.POST_ARTICLE_START
    }
}

const postArticleSuccess = () => {
    return {
        type: actionTypes.POST_ARTICLE_SUCCESS
    }
}

const postArticleFailed = err => {
    return {
        type: actionTypes.POST_ARTICLE_FAILED,
        err
    }
}