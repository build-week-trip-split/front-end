import React from "react";
import { connect } from "react-redux";
import { getTrips, addNewTrip, fetchTrip, getBills } from "../actions";
import { Button } from "antd";
import CurrentTrips from "../components/Trips/CurrentTrips";
import PastTrips from "../components/Trips/PastTrips";
import AddTripForm from "../components/Trips/AddTripForm";
import moment from "moment";

class HomePage extends React.Component {
  state = {};
  //Separtating Current and Old Trips using moment/current data library?
  componentDidMount() {
    this.props.getTrips();
  }

  handleLogout = () => {
    localStorage.removeItem("token");
  };

  render() {
    const getUserName = localStorage.getItem("username");
    const { trips } = this.props;
    const todaysDate = Math.round(new Date().getTime() / 1000);
    const currentTrips = [];
    const pastTrips = [];
    return (
      <div>
        <h1>Welcome {getUserName}!</h1>
        <Button onClick={this.handleLogout}>Log Out</Button>
        {trips.trips.map(trip => {
          return parseInt(trip.endDate) > todaysDate
            ? currentTrips.push(trip)
            : pastTrips.push(trip);
        })}
        <CurrentTrips currentTrips={currentTrips} />
        <PastTrips pastTrips={pastTrips} />
        <AddTripForm addNewTrip={this.props.addNewTrip} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    trips: state.trips,
    fetchingTrips: state.fetchingTrips,
    bills: state.bills
  };
};

export default connect(mapStateToProps, {
  getTrips,
  addNewTrip,
  fetchTrip,
  getBills
})(HomePage);
