import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CurrentTrip from './CurrentTrip';
import PastTrips from './PastTrips';
import AddNewTrip from './AddNewTrip';
import Navbar from './Navbar';

import {
  getTrips,
  deleteTrip,
  addNewTrip,
  updateTrip,
  fetchTrip
} from '../../actions';

const TripWithrouter = withRouter(CurrentTrip);

class HomeContainer extends React.Component {
  componentDidMount() {
    this.props.getTrips();
  }

  logout = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div className="user-profile">
          <img src="" alt="" />
          <h2>Joe Doe</h2>
        </div>
        <button onClick={this.logout}>Log Out</button>
        <div>
          <TripWithrouter
            trips={this.props.trips}
            deleteTrip={this.props.deleteTrip}
            updateTrip={this.props.updateTrip}
            fetchTrip={this.props.fetchTrip}
          />
          <PastTrips trips={this.props.trips} />
          <AddNewTrip
            addNewTrip={this.props.addNewTrip}
            getTrips={this.props.getTrips}
          />
          <Navbar />
        </div>
      </div>
    );
  }
}

const maptStateToProps = state => {
  console.log(state);
  return {
    error: state.error,
    fetchingTrips: state.fetchingTrips,
    trips: state.trips
  };
};

export default connect(
  maptStateToProps,
  { getTrips, deleteTrip, addNewTrip, updateTrip, fetchTrip }
)(HomeContainer);
