import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
} from './authTypes';

const initialStates = {
    loading: false,
    authenticated: true,
    userProfile: [],
    errorMsg: '',
};

const authReducer = (state = initialStates, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                authenticated: true, // to remove, for testing only.
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                authenticated: true,
                userProfile: action.payload,
                errorMsg: '',
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                authenticated: false,
                userProfile: [],
                errorMsg: action.payload,
            };
        case LOGOUT_REQUEST:
            return {
                ...state,
                loading: false,
                authenticated: false,
                userProfile: [],
                errorMsg: '',
            };
        default:
            return state;
    }
};

export default authReducer;
