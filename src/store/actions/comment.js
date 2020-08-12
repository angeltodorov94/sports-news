import * as actionTypes from './actionTypes'

export const postComment = (content, articleId, userId) => {
    return dispatch => {
        fetch('http://localhost:9999/api/comment/', {
            method: "POST",
            body: JSON.stringify({ content, articleId, userId }),
            headers: { 'Content-Type': 'application/json' }
        }).then(response => dispatch(articleUpdate()))
    }
}

export const deleteComment = id => {
    return dispatch => {
        fetch(`http://localhost:9999/api/comment/${id}`, { method: "DELETE" })
            .then(response => dispatch(articleUpdate()))
    }
}

// -------------------------------------------------------------------

const articleUpdate = () => {
    return {
        type: actionTypes.ARTICLE_UPDATE
    }
}