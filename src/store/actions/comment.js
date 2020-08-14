import * as actionTypes from './actionTypes'
import axios from 'axios'

export const postComment = (content, articleId, userId) => {
    return dispatch => {
        axios.post('/comment', { content, articleId, userId })
            .then(response => dispatch(articleUpdate()))
    }
}

export const deleteComment = id => {
    return dispatch => {
        axios.delete(`/comment/${id}`)
            .then(() => dispatch(articleUpdate()))
    }
}

// -------------------------------------------------------------------

const articleUpdate = () => {
    return {
        type: actionTypes.ARTICLE_UPDATE
    }
}