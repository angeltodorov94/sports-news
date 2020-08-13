import * as actionTypes from './actionTypes'

export const getArticle = id => {
    return (dispatch, getState) => {
        if (getState().article.data === null)
            dispatch(getArticleStart())

        fetch(`http://localhost:9999/api/article/${id}`, { method: 'GET' })
            .then(response => response.json())
            .then(response => dispatch(getArticleSuccess(response)))
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
        fetch('http://localhost:9999/api/article', {
            method: "POST",
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        }).then(response => response.json())
            .catch(err => console.error(err))
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