import * as actionTypes from '../actions/actionTypes'

const initialState = {
    id: null,
    isAdmin: null,
    loading: true,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                id: action.id,
                isAdmin: action.isAdmin,
                loading: false,
                error: null
            }
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                loading: false,
                error: action.err
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...initialState,
                loading: false
            }
        case actionTypes.REMOVE_ERROR:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}

export default reducer