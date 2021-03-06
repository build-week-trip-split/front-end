import axios from "axios";
import { axiosWithAuth } from "../ulitity/axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const logIn = credentials => dispatch => {
  localStorage.setItem("username", credentials.username);
  dispatch({ type: LOGIN_START });
  return axios
    .post(
      "https://trip-split-buildweek.herokuapp.com/oauth/token",
      `grant_type=password&username=${credentials.username}&password=${
        credentials.password
      }`,
      {
        headers: {
          Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    )
    .then(res => {
      localStorage.setItem("token", res.data.access_token);
    })
    .catch(err => console.dir(err));
};

export const SIGN_UP_START = "SIGN_UP_START";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAIL = "SIGN_UP_FAIL";

export const addNewUser = newUser => dispatch => {
  dispatch({ type: SIGN_UP_START });
  return axios
    .post("https://trip-split-buildweek.herokuapp.com/createnewuser", newUser)
    .then(res => {
      dispatch({ type: SIGN_UP_SUCCESS });
    })
    .catch(err => {
      console.log(err);
    });
};

export const FETCH_TRIPS_START = "FETCH_TRIPS_START";
export const FETCH_TRIPS_SUCCESS = "FETCH_TRIPS_SUCCESS";
export const FETCH_TRIPS_FAIL = "FETCH_TRIPS_FAIL";
export const GET_USERNAME_SUCCESS = "GET_USERNAME_SUCCESS";

export const getTrips = () => dispatch => {
  const username = localStorage.getItem("username");
  dispatch({ type: FETCH_TRIPS_START });
  return axiosWithAuth()
    .get(`/trips/trips/${username}`)
    .then(res => {
      dispatch({ type: FETCH_TRIPS_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const FETCH_SINGLE_TRIP_START = "FETCH_SINGLE_TRIP_START";
export const FETCH_SINGLE_TRIP_SUCCESS = "FETCH_SINGLE_TRIP_SUCCESS";
export const FETCH_SINGLE_TRIP_FAIL = "FETCH_SINGLE_TRIP_FAIL";

export const fetchTrip = tripid => dispatch => {
  dispatch({ type: FETCH_SINGLE_TRIP_START });
  return axiosWithAuth()
    .get(`/trips/trip/${tripid}`)
    .then(res => {
      dispatch({ type: FETCH_SINGLE_TRIP_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const ADD_NEW_TRIP_START = "ADD_NEW_TRIP_START";
export const ADD_NEW_TRIP_SUCCESS = "ADD_NEW_TRIP_SUCCESS";
export const ADD_NEW_TRIP_FAIL = "ADD_NEW_TRIP_FAIL";

export const addNewTrip = newTrip => dispatch => {
  const username = localStorage.getItem("username");
  dispatch({ type: ADD_NEW_TRIP_START });
  return axiosWithAuth()
    .post(`/trips/trip/${username}`, newTrip)
    .then(res => {
      dispatch({ type: ADD_NEW_TRIP_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const DELETE_TRIP_START = "DELETE_TRIP_START";
export const DELETE_TRIP_SUCCESS = "DELETE_TRIP_SUCCESS";
export const DELETE_TRIP_FAIL = "DELETE_TRIP_FAIL";

export const deleteTrip = tripid => dispatch => {
  dispatch({ type: DELETE_TRIP_START });
  return axiosWithAuth()
    .delete(`/trips/trip/${tripid}`)
    .then(res => {
      dispatch({ type: DELETE_TRIP_SUCCESS, payload: tripid });
    })
    .catch(err => console.log(err));
};

export const UPDATE_TRIP_START = "UPDATE_TRIP_START";
export const UPDATE_TRIP_SUCCESS = "UPDATE_TRIP_SUCCESS";
export const UPDATE_TRIP_FAIL = "UPDATE_TRIP_FAIL";

export const updateTrip = (tripid, updateTrip) => dispatch => {
  dispatch({ type: UPDATE_TRIP_START });
  return axiosWithAuth()
    .put(`/trips/trip/${tripid}`, updateTrip)

    .then(res => {
      dispatch({ type: UPDATE_TRIP_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const FETCH_BILLS_START = "GET_BILL_START";
export const FETCH_BILLS_SUCCESS = "GET_BILL_SUCCESS";
export const FETCH_BILLS_FAIL = "GET_BILL_FAIL";

export const getBills = tripid => dispatch => {
  dispatch({ type: FETCH_BILLS_START });
  return axiosWithAuth()
    .get(`/bills/bills/${tripid}`)
    .then(res => {
      dispatch({ type: FETCH_BILLS_SUCCESS });
    })
    .catch(err => console.log(err));
};

export const END_TRIP_START = "END_TRIP_START";
export const END_TRIP_SUCCESS = "END_TRIP_SUCCESS";
export const END_TRIP_FAIL = "END_TRIP_FAIL";

export const endTrip = tripid => dispatch => {
  dispatch({ type: END_TRIP_START });
  return axiosWithAuth()
    .put(`/trips/trip/completed/${tripid}`)
    .then(res => {
      dispatch({ type: END_TRIP_SUCCESS });
    })
    .catch(err => console.log(err));
};

export const ADD_BILL_START = "ADD_BILL_START";
export const ADD_BILL_SUCCESS = "ADD_BILL_SUCCESS";
export const ADD_BILL_FAIL = "ADD_BILL_FAIL";

export const addBill = (tripid, newBill) => dispatch => {
  const username = localStorage.getItem("username");
  dispatch({ type: ADD_BILL_START });
  return axiosWithAuth()
    .post(`bills/bill/${tripid}/${username}`, newBill)
    .then(res => {
      dispatch({ type: ADD_BILL_SUCCESS, payload: newBill });
    })
    .catch(err => console.log('AddBill in actions: ', err));
};

export const DELETE_BILL_START = "DELTE_BILL_START";
export const DELETE_BILL_SUCCESS = "DELETE_BILL_SUCCESS";
export const DELETE_BILL_FAIL = "DELETE_BILL_FAIL";

export const deleteBill = billid => dispatch => {
  dispatch({ type: DELETE_BILL_START });
  return axiosWithAuth()
    .delete(`bills/bill/${billid}`)
    .then(res => {
      dispatch({ type: DELETE_BILL_SUCCESS, payload: billid });
    })
    .catch(err => console.log(err));
};

export const ADD_USER_TO_TRIP_START = "ADD_USER_TO_TRIP_START";
export const ADD_USER_TO_TRIP_SUCCESS = "ADD_USER_TO_TRIP_SUCCESS";
export const ADD_USER_TO_TRIP_FAIL = "ADD_USER_TO_TRIP_FAIL";

export const addUserToTrip = (tripid, username) => dispatch => {
  dispatch({ type: ADD_USER_TO_TRIP_START });
  return axiosWithAuth()
    .post(`/trips/trip/adduser/${tripid}/${username}`)
    .then(res => {
      dispatch({ type: ADD_USER_TO_TRIP_SUCCESS });
    })
    .catch(err => console.log(err));
};

export const DELETE_USER_START = "DELETE_USER_START";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAIL = "DELETE_USER_FAIL";

export const deleteUser = (tripid, username) => dispatch => {
  console.log(tripid, username);
  
  dispatch({ type: DELETE_USER_START });
  return axiosWithAuth()
    .post(`trips/trip/deleteuser/${tripid}/${username}`)
    .then(res => {
      console.log(res);
      dispatch({ type: DELETE_BILL_SUCCESS, payload: username });
    })
    .catch(err => console.log(err));
};
