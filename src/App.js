import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { addBill, getBills, updateTrip } from "./actions";

import Trip from "./view/HomeContainer/Trip";
import TripForm from "./view/HomeContainer/TripForm";
import Login from "./view/Login";
import SignUp from "./view/SignUp";
import HomeContainer from "./view/HomeContainer/HomeContainer";
import PrivateRoute from "./view/PrivateRoute";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className='navbar'>
            <p>
              <Link to="/users">Home</Link>
            </p>
            <p>
              <Link to="/">Sign In</Link>
            </p> 
            <p>
              <Link to="/signup">Sign Up</Link>
            </p>
          </div>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route
            exact
            path="/users/:tripid"
            render={props => <Trip {...props} />}
          />
          <Route
            path="/users/:tripid/trip"
            render={props => (
              <TripForm
                {...props}
                updateTrip={this.props.updateTrip}
                getBills={this.props.getBills}
              />
            )}
          />
          <PrivateRoute exact path="/users" component={HomeContainer} />
        </Router>
      </div>
    );
  }
}

const maptStateToProps = state => {
  console.log(state);
  return {
    error: state.error,
    fetchingTrips: state.fetchingTrips,
    trips: state.trips,
    bills: state.bills,
    fetchingBills: false
  };
};

export default connect(
  maptStateToProps,
  { addBill, updateTrip, getBills }
)(App);
