import * as actionTypes from '../actions/actionTypes'

const initialState = {
    allUsers: null,
    allArticles: null,
    postArticleStatus: null,
    loading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADMIN_PROCESS_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case actionTypes.GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                allUsers: action.allUsers,
                loading: false,
                error: null
            }
        case actionTypes.GET_ALL_ARTICLES_SUCCESS:
            return {
                ...state,
                allArticles: action.allArticles,
                loading: false,
                error: null
            }
        case actionTypes.ADMIN_PROCESS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.err
            }
        default:
            return state
    }
}

export default reducer