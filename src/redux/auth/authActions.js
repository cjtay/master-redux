import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
} from './authTypes';

export const login = () => {
    return {
        type: LOGIN_REQUEST,
    };
};

export const loginSuccess = (userProfile) => {
    return {
        type: LOGIN_SUCCESS,
        payload: userProfile,
    };
};

export const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error,
    };
};

export const logout = () => {
    return {
        type: LOGOUT_REQUEST,
    };
};
