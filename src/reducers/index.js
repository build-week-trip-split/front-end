
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../actions';

const initialState = {
    error: '',
    isLoggingIn: false
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
        default: 
            return state
    }
}

export default reducer; 