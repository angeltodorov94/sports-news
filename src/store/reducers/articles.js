import * as actionTypes from '../actions/actionTypes'

const initialState = {
    top4articles: {
        data: [],
        loading: false,
        error: null
    },
    articles: {
        data: [],
        loading: false,
        error: null
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_TOP_NEWS_START:
            return {
                ...state,
                top4articles: {
                    ...state.top4articles,
                    loading: true,
                    error: null
                },
            }
        case actionTypes.GET_TOP_NEWS_SUCCESS:
            return {
                ...state,
                top4articles: {
                    ...state.top4articles,
                    data: [...action.data],
                    loading: false,
                    error: null
                },
            }
        case actionTypes.GET_TOP_NEWS_FAILED:
            return {
                ...state,
                top4articles: {
                    ...state.top4articles,
                    loading: false,
                    error: action.err
                },
            }
        case actionTypes.GET_RECENT_NEWS_START:
            return {
                ...state,
                articles: {
                    ...state.articles,
                    loading: true,
                    error: null
                },
            }
        case actionTypes.GET_RECENT_NEWS_SUCCESS:
            return {
                ...state,
                articles: {
                    ...state.articles,
                    data: [...action.data],
                    loading: false,
                    error: null
                },
            }
        case actionTypes.GET_RECENT_NEWS_FAILED:
            return {
                ...state,
                articles: {
                    ...state.articles,
                    loading: false,
                    error: action.err
                },
            }
        default:
            return state
    }
}

export default reducer