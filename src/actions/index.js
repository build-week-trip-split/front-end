import axios from 'axios';
import { axiosWithAuth } from '../ulitity/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const logIn = credentials => dispatch => {
    console.log(credentials);
    dispatch({ type: LOGIN_START})
    return axiosWithAuth()
        .post('/login', credentials)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: LOGIN_SUCCESS })
            return true; 
        })
        .catch(err => {
            console.log(err)
        })
}

export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAIL = 'SIGN_UP_FAIL';

export const signUp = newUser => dispatch => {
    console.log(newUser);
    dispatch({ type: SIGN_UP_START })
    axios  
        .post('/friends', newUser)
        .then(res => {
            console.log(res);
            dispatch({ type: LOGIN_SUCCESS })
            return true;
        })
        .catch(err => {
            console.log(err)
        })
}