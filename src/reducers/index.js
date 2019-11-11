import { authReducer } from "./auth-reducer";
import { tripsReducer } from "./trips-reducer";
import { billsReducer } from "./bills-reducer";
import { initialState } from "./initialState";

export const rootReducer = (state = initialState, action) => ({
  auth: authReducer(state.auth, action),
  trips: tripsReducer(state.trips, action),
  bills: billsReducer(state.bills, action)
});
