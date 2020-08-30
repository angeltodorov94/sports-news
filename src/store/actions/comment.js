import * as actionTypes from './actionTypes'
import axios from 'axios'

export const postComment = (content, articleId) => {
    return dispatch => {
        axios.post('/comment', { content, articleId })
            .then(response => dispatch(articleUpdate()))
    }
}

export const deleteComment = (articleId, id) => {
    return dispatch => {
        axios.delete(`/comment/${articleId}/${id}`)
            .then(() => dispatch(articleUpdate()))
    }
}

// -------------------------------------------------------------------

const articleUpdate = () => {
    return {
        type: actionTypes.ARTICLE_UPDATE
    }
}