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