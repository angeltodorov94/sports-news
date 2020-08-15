import * as actionTypes from './actionTypes'
import axios from 'axios'

export const getTopNews = () => {
    return dispatch => {
        dispatch(getTopNewsStart())
        axios.get('/article?limit=4&sortBy=clicks')
            .then(response => dispatch(getTopNewsSuccess(response.data)))
            .catch(err => dispatch(getTopNewsError()))
    }
}

export const getRecentNews = (filter) => {
    const category = filter || ''
    return dispatch => {
        dispatch(getRecentNewsStart())
        axios.get(`/article${category}`)
            .then(response => dispatch(getRecentNewsSuccess(response.data)))
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
        data: articles.data
    }
}

const getRecentNewsSuccess = (articles) => {
    return {
        type: actionTypes.GET_RECENT_NEWS_SUCCESS,
        data: articles.data,
        count: Number(articles.count)
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