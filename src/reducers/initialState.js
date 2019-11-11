export const initialState = {
  users: [],
  deletingUser: false,
  trips: {
    fetchingTrips: false,
    fetchingTrip: false,
    creatingTrip: false,
    trips: [],
    deletingTrip: false,
    updatingTrip: false,
    addingUserToTrip: false
  },

  bills: {
    bills: [],
    creatingBill: false,
    fetchingBills: false,
    deletingBill: false
  },
  auth: {
    isLoggingIn: false,
    isSigningUp: false
  }
};
