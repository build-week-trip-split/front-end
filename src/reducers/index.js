
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL
} from '../actions';

const initialState = {
    error: '',
    isLoggingIn: false,
    isSigningUp: false,

}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                error: '',
                isLoggingIn: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: '',
                isLoggingIn: false
            }
        case LOGIN_FAIL: 
            return {
                ...state,
                error: 'Unable to login...'
            }
        case SIGN_UP_START:
            return {
                ...state,
                isSigningUp: true
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                isSigningUp: false, 
            }
        case SIGN_UP_FAIL:
            return {
                ...state,
                isSigningUp: false,
                error: 'Unable to sign up'
            }
        default: 
            return state
    }
}

export default reducer; 