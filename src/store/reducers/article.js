import * as actionTypes from '../actions/actionTypes'

const initialState = {
    data: null,
    loading: false,
    error: null,
    toggle: false,
    update: false,
    postLoading: null,
    postError: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ARTICLE_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case actionTypes.GET_ARTICLE_SUCCESS:
            return {
                ...state,
                data: { ...action.data },
                loading: false,
                error: null
            }
        case actionTypes.GET_ARTICLE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.err
            }
        case actionTypes.TOGGLE_COMMENT_SECTION:
            return {
                ...state,
                toggle: !state.toggle
            }
        case actionTypes.ARTICLE_UPDATE:
            return {
                ...state,
                update: !state.update
            }
        case actionTypes.CLEAN_ARTICLE:
            return {
                ...initialState
            }
        case actionTypes.POST_ARTICLE_START: {
            return {
                ...state,
                postLoading: true,
                postError: null
            }
        }
        case actionTypes.POST_ARTICLE_SUCCESS: {
            return {
                ...state,
                postLoading: false
            }
        }
        case actionTypes.POST_ARTICLE_FAILED: {
            return {
                ...state,
                postLoading: false,
                postError: action.err
            }
        }
        default:
            return state
    }
}

export default reducer