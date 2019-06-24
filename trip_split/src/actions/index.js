// import axios from 'axios';
import { axiosWithAuth } from '../ulitity/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const logIn = credentials => dispatch => {
    console.log(credentials);
    dispatch({ type: LOGIN_START})
    return axiosWithAuth()
        .post('/oauth/token', credentials)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data);
            dispatch({ type: LOGIN_SUCCESS })
            return true; 
        })
        .catch(err => {
            console.log(err.response )
        })
}
