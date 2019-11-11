import {
  FETCH_BILLS_START,
  FETCH_BILLS_SUCCESS,
  FETCH_BILLS_FAIL,
  ADD_BILL_START,
  ADD_BILL_SUCCESS,
  ADD_BILL_FAIL,
  DELETE_BILL_START,
  DELETE_BILL_SUCCESS,
  DELETE_BILL_FAIL
} from "../actions";

import { initialState } from "./initialState";

export const billsReducer = (state = initialState, action) => {
  switch (action.type) {
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
        creatingBill: false,
        bills: [...state.bills, action.payload]
      };
    case ADD_BILL_FAIL:
      return {
        ...state,
        error: "Unable to add bill..."
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
    default:
      return state;
  }
};
