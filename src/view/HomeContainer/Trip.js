import React from "react";
import { connect } from "react-redux";
import { fetchTrip, deleteTrip, updateTrip, addBill, getBills } from "../../actions";

import BillForm from '../HomeContainer/BillForm';

class Trip extends React.Component {
  constructor(props) {
    console.log(props);
    super();
    this.state ={
        updateTrip: {
            tripname: '',
            startDate: '',
            endDate: '', 
        },
    }
  }
  componentDidMount() {
    const id = this.props.match.params.tripid;
    this.props.fetchTrip(id);
  }

  handleChange = e => {
    this.setState({
        updateTrip: {
            ...this.state.updateTrip,
            [e.target.name]: e.target.value
        }
    })
}

  deleteTrip = tripid => {
    this.props.deleteTrip(tripid)
    .then(() => {
      this.props.history.push("/users");
    });
  };

  updateTrip = (tripid, updateTrip) => {
      this.props.updateTrip(tripid, updateTrip)
  }

  updateFormState = e => {
      e.preventDefault();
      this.setState({
          updateTrip: {
              tripname: this.props.trip.tripname,
              startDate: this.props.trip.startDate,
              endDate: this.props.trip.endDate
          }
      })
  }

  render() {
    const { trip } = this.props;
    if (this.props.fetchingTrip) {
      return <div>Loading...</div>;
    }

    if (!trip) {
      return <div>Empty Trip...</div>;
    }

    return (
      <div>
        <div>tripid: {trip.tripid}</div>
        <div>completed: {trip.completed ? "True" : "False"}</div>
        <div>endDate: {trip.endDate}</div>
        <div>startDate: {trip.startDate}</div>
        <div>endDate: {trip.endDate}</div>
        <div>madeByWhom: {trip.madeByWhom}</div>
        <div>tripname: {trip.tripname}</div>
        <div>users: {trip.users.map(u => u.username).join(", ")}</div>
        <div>
          bills:{" "}
          {trip.bills
            .map(b => [b.billTitle, b.billAmount].join(": "))
            .join(",")}
        </div>

        <form onSubmit={() => this.updateTrip(trip.tripid, this.state.updateTrip)}>
                    <input 
                        type='text'
                        name='tripname'
                        placeholder='tripname'
                        value={this.state.updateTrip.tripname}
                        onChange={this.handleChange}
                    />
                    <input 
                        type='date'
                        name='startDate'
                        placeholder='start date'
                        value={this.state.updateTrip.startDate}
                        onChange={this.handleChange}
                    />
                    <input 
                        type='date'
                        name='endDate'
                        placeholder='end date'
                        value={this.state.updateTrip.endDate}
                        onChange={this.handleChange}
                    />
                <button>Update</button>
            </form>
            <button onClick={e => this.updateFormState(e)}>Update Trip</button>
        
        <button onClick={() => this.deleteTrip(trip.tripid)}>Delete</button>
        <BillForm addBill={this.props.addBill} tripid={trip.tripid} getBills={this.props.getBills}/> 
      </div>
    );
  }
}

const maptStateToProps = state => ({
  trip: state.trip,
  fetchingTrip: state.fetchingTrip
});

export default connect(
  maptStateToProps,
  { fetchTrip, deleteTrip, updateTrip, addBill, getBills }
)(Trip);
