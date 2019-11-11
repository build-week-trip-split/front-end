import { axiosWithAuth } from "../ulitity";

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
    .catch(err => console.log("AddBill in actions: ", err));
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
