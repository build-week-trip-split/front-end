import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';
import { connect } from "react-redux";
import { addBill, getBills, updateTrip,  } from './actions';

import Trip from './view/HomeContainer/Trip';
import TripForm from './view/HomeContainer/TripForm';
import BillForm from './view/HomeContainer/BillForm';
import Login from './view/Login';
import SignUp from './view/SignUp';
import HomeContainer from './view/HomeContainer/HomeContainer';
import PrivateRoute from './view/PrivateRoute';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Link to='/'>Sign In</Link>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/users'>Home</Link>
          </div>
          <Route exact path='/' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route exact path="/users/:tripid" render={props => <Trip {...props} />} />
          <Route path="/users/:tripid/bills" render={props => <BillForm {...props} addBill={this.props.addBill}  getBills={this.props.getBills}/>} />
          <Route path='/users/:tripid/trip' render={props => <TripForm {...props} updateTrip={this.props.updateTrip} />} />
          <PrivateRoute exact path='/users'component={HomeContainer} />
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

