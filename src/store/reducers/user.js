import * as actionTypes from '../actions/actionTypes'

const initialState = {
    userDetails: null,
    allUsers: null,
    loading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_USERS_INFO_START:
        case actionTypes.GET_USER_INFO_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case actionTypes.GET_USER_INFO_SUCCESS:
            return {
                ...state,
                userDetails: action.userDetails,
                loading: false,
                error: null
            }
        case actionTypes.GET_ALL_USERS_INFO_SUCCESS:
            return {
                ...state,
                allUsers: action.allUsers,
                loading: false,
                error: null
            }
        case actionTypes.GET_ALL_USERS_INFO_FAILED:
        case actionTypes.GET_USER_INFO_FAILED:
            return {
                ...state,
                loading: false,
                error: action.err
            }
        case actionTypes.CLEAN_USER_INFO:
            return {
                ...initialState
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