
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL, 
    FETCH_PAST_TRIPS_START,
    FETCH_PAST_TRIPS_SUCCESS,
    FETCH_PAST_TRIPS_FAIL,
    ADD_NEW_TRIP_START,
    ADD_NEW_TRIP_SUCCESS,
    ADD_NEW_TRIP_FAIL
} from '../actions';

const initialState = {
    error: '',
    isLoggingIn: false,
    isSigningUp: false,
    fetchingTrips: false,
    creatingTrip: false, 
    pastTrips: [{
        destination: '',
        dates: '',
        people: [],
        numberOfPeople: '',
        completed: true
    }],
    newTrip: [{
        destination: '',
        startDate: '',
        endDate: '', 
        friends: [],
        numberOfPeople:'',
        completed: true
    }]
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
        case FETCH_PAST_TRIPS_START: 
            return {
                ...state,
                fetchingTrips: true,
            }
        case FETCH_PAST_TRIPS_SUCCESS:
            return {
                ...state,
                fetchingTrips: false,
                pastTrips: [{
                    destination: action.payload,
                    dates: action.payload,
                    people: action.payload,
                    numberOfPeople: action.paylod,
                    completed: true
                }]
            }
        case FETCH_PAST_TRIPS_FAIL:
            return {
                ...state,
                error: 'Unable to view trips at this time...'
            }
        case ADD_NEW_TRIP_START: 
            return {
                ...state,
                creatingTrip: true
            }
        case ADD_NEW_TRIP_SUCCESS: 
            return {
                ...state,
                creatingTrip: false,
                newTrip: [{
                    destination: '',
                    startDate: '',
                    endDate: '', 
                    friends: [],
                    numberOfPeople:'',
                    completed: true
                }]
            }
        default: 
            return state
    }
}

export default reducer; 