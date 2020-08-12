import * as actionTypes from './actionTypes'

export const getTopNews = () => {
    return dispatch => {
        dispatch(getTopNewsStart())
        fetch('http://localhost:9999/api/article?limit=4&sortBy=clicks', { method: 'GET' })
            .then(response => response.json())
            .then(response => dispatch(getTopNewsSuccess(response)))
            .catch(err => dispatch(getTopNewsError()))
    }
}

export const getRecentNews = (filter) => {
    const category = filter || ''
    return dispatch => {
        dispatch(getRecentNewsStart())
        fetch(`http://localhost:9999/api/article${category}`, { method: 'GET' })
            .then(response => response.json())
            .then(response => dispatch(getRecentNewsSuccess(response)))
            .catch(err => dispatch(getRecentNewsError()))
    }
}

// --------------------------------------------

const getTopNewsStart = () => {
    return {
        type: actionTypes.GET_TOP_NEWS_START
    }
}

const getRecentNewsStart = () => {
    return {
        type: actionTypes.GET_RECENT_NEWS_START
    }
}

const getTopNewsSuccess = (articles) => {
    return {
        type: actionTypes.GET_TOP_NEWS_SUCCESS,
        data: articles
    }
}

const getRecentNewsSuccess = (articles) => {
    return {
        type: actionTypes.GET_RECENT_NEWS_SUCCESS,
        data: articles
    }
}

const getTopNewsError = () => {
    return {
        type: actionTypes.GET_TOP_NEWS_FAILED,
        err: "Something Went Wrong!"
    }
}

const getRecentNewsError = () => {
    return {
        type: actionTypes.GET_RECENT_NEWS_FAILED,
        err: "Something Went Wrong!"
    }
}