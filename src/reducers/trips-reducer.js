import {
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
  END_TRIP_SUCCESS,
  ADD_USER_TO_TRIP_SUCCESS,
  ADD_USER_TO_TRIP_START,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL
} from "../actions";

import { initialState } from "./initialState";

export const tripsReducer = (state = initialState, action) => {
  switch (action.type) {
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

    case DELETE_USER_START:
      return {
        ...state,
        deletingUser: true
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        deletingUser: false,
        users: state.users.filter(user => {
          if (action.payload === user.username) {
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
