import * as actionTypes from './actionTypes'

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

// -------------------------------------------------
