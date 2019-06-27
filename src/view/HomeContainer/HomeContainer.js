import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import CurrentTrip from "./CurrentTrip";
import PastTrips from "./PastTrips";
import AddNewTrip from "./AddNewTrip";
import Name from './Name';

import { getTrips, addNewTrip, fetchTrip, getBills } from "../../actions";

class HomeContainer extends React.Component {
  componentDidMount() {
    this.props.getTrips();
  }

  logout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="user-profile">
        <div className='name'>
          <img src="" alt="" />
         <Name />
        </div>
        <div className='current-trip'>
          <CurrentTrip
            trips={this.props.trips}
            deleteTrip={this.props.deleteTrip}
            updateTrip={this.props.updateTrip}
            fetchTrip={this.props.fetchTrip}
          />
        </div>
        <div className='past-trip'>
          <PastTrips trips={this.props.trips} />
        </div>
        <div className='add-trip-form'>
          <AddNewTrip
              addNewTrip={this.props.addNewTrip}
              getTrips={this.props.getTrips}
            />
        </div>
        <button className='logout-button'onClick={this.logout}>Log Out</button>
        <footer>
            <small>
              <Link to="/users">Home</Link>
            </small>
            <small>
              <Link to="/">Sign In</Link>
            </small> 
            <small>
              <Link to="/signup">Sign Up</Link>
            </small>
        </footer>
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
  { getTrips, addNewTrip, fetchTrip, getBills }
)(HomeContainer);
