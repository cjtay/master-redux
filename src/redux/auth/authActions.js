import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
} from './authTypes';

export const login = () => ({
    type: LOGIN_REQUEST,
});

export const loginSuccess = (userProfile) => ({
    type: LOGIN_SUCCESS,
    payload: userProfile,
});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
});

export const logout = () => ({
    type: LOGOUT_REQUEST,
});
