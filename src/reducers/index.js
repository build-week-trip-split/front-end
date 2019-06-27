import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  FETCH_TRIPS_START,
  FETCH_TRIPS_SUCCESS,
  FETCH_TRIPS_FAIL,
  ADD_NEW_TRIP_START,
  ADD_NEW_TRIP_SUCCESS,
  ADD_NEW_TRIP_FAIL,
  DELETE_TRIP_START,
  DELETE_TRIP_SUCCESS,
  DELETE_TRIP_FAIL,
  UPDATE_TRIP_START,
  UPDATE_TRIP_SUCCESS,
  UPDATE_TRIP_FAIL,
  FETCH_SINGLE_TRIP_START,
  FETCH_SINGLE_TRIP_SUCCESS,
  FETCH_SINGLE_TRIP_FAIL,
  FETCH_BILLS_START,
  FETCH_BILLS_SUCCESS,
  FETCH_BILLS_FAIL,
  ADD_BILL_START,
  ADD_BILL_SUCCESS,
  ADD_BILL_FAIL,
  END_TRIP_SUCCESS,
  ADD_USER_TO_TRIP_SUCCESS,
  ADD_USER_TO_TRIP_START,
  DELETE_BILL_START,
  DELETE_BILL_SUCCESS,
  DELETE_BILL_FAIL,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL
} from "../actions";

const initialState = {
  error: "",
  isLoggingIn: false,
  isSigningUp: false,
  fetchingTrips: false,
  fetchingTrip: false,
  creatingTrip: false,
  trips: [],
  deletingTrip: false,
  updatingTrip: false,
  bills: [],
  creatingBill: false,
  fetchingBills: false,
  addingUserToTrip: false,
  trip: null,
  deletingBill: false,
  users: [],
  deletingUser: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: "",
        isLoggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: "",
        isLoggingIn: false
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: "Unable to login..."
      };
    case SIGN_UP_START:
      return {
        ...state,
        isSigningUp: true
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isSigningUp: false
      };
    case SIGN_UP_FAIL:
      return {
        ...state,
        isSigningUp: false,
        error: "Unable to sign up"
      };
    case FETCH_TRIPS_START:
      return {
        ...state,
        fetchingTrips: true
      };
    case FETCH_TRIPS_SUCCESS:
      return {
        ...state,
        fetchingTrips: false,
        trips: action.payload
      };
    case FETCH_TRIPS_FAIL:
      return {
        ...state,
        error: "Unable to view trips at this time..."
      };
    case FETCH_SINGLE_TRIP_START:
      return {
        ...state,
        fetchingTrip: true
      };
    case FETCH_SINGLE_TRIP_SUCCESS:
      return {
        ...state,
        fetchingTrip: false,
        trip: action.payload
      };
    case FETCH_SINGLE_TRIP_FAIL:
      return {
        ...state,
        error: "Unable to load trip"
      };
    case ADD_NEW_TRIP_START:
      return {
        ...state,
        creatingTrip: true
      };
    case ADD_NEW_TRIP_SUCCESS:
      return {
        ...state,
        creatingTrip: false
      };
    case ADD_NEW_TRIP_FAIL:
      return {
        ...state,
        error: "Unable to add trip..."
      };
    case DELETE_TRIP_START:
      return {
        ...state,
        deletingTrip: true
      };
    case DELETE_TRIP_SUCCESS:
      return {
        ...state,
        deletingTrip: false,
        trips: state.trips.filter(trip => {
          if (action.payload === trip.tripid) {
            return false;
          } else {
            return true;
          }
        })
      };
    case DELETE_TRIP_FAIL:
      return {
        ...state,
        deletingTrip: false,
        error: "Unable to delete.."
      };
    case UPDATE_TRIP_START:
      return {
        ...state,
        updatingTrip: true
      };
    case UPDATE_TRIP_SUCCESS:
      return {
        ...state
      };
    case UPDATE_TRIP_FAIL:
      return {
        ...state,
        error: "Unable to update trip..."
      };
    case FETCH_BILLS_START:
      return {
        ...state,
        fetchingBills: true
      };
    case FETCH_BILLS_SUCCESS:
      return {
        ...state,
        fetchingBills: false,
        bills: action.payload
      };
    case FETCH_BILLS_FAIL:
      return {
        ...state,
        error: "Unable to fetch bills..."
      };
    case ADD_BILL_START:
      return {
        ...state,
        creatingBill: true
      };
    case ADD_BILL_SUCCESS:
      return {
        ...state,
        creatingBill: false
      };
    case ADD_BILL_FAIL:
      return {
        ...state,
        error: "Unable to add bill..."
      };
    case END_TRIP_SUCCESS:
      return {
        ...state,
        trip: { ...state.trip, completed: true }
      };
    case ADD_USER_TO_TRIP_START:
      return {
        ...state,
        addingUserToTrip: true
      };
    case ADD_USER_TO_TRIP_SUCCESS:
      return {
        ...state,
        addingUserToTrip: false
      };
    case DELETE_BILL_START:
      return {
        ...state,
        deletingBill: true
      };
    case DELETE_BILL_SUCCESS:
      return {
        ...state,
        deletingBill: false,
        bills: state.bills.filter(bill => {
          if (action.payload === bill.billid) {
            return false;
          } else {
            return true;
          }
        })
      };
    case DELETE_BILL_FAIL:
      return {
        ...state,
        deletingTrip: false,
        error: "Unable to delete.."
      };
    case DELETE_USER_START:
      return {
        ...state,
        deletingBill: true
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        deletingBill: false,
        bills: state.users.filter(user => {
          if (action.payload === user.userid) {
            return false;
          } else {
            return true;
          }
        })
      };
    case DELETE_USER_FAIL:
      return {
        ...state,
        deletingTrip: false,
        error: "Unable to delete.."
      };
    default:
      return state;
  }
};

export default reducer;
