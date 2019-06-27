import React from "react";
import { connect } from "react-redux";
import { fetchTrip, deleteTrip, updateTrip, addBill, getBills, addUserToTrip } from "../../actions";

import BillForm from '../HomeContainer/BillForm';
import EndTripButton from './EndTripButton';


class Trip extends React.Component {
  constructor(props) {
    console.log(props);
    super();
    this.state ={
        newBill: {
            billTitle: '',
            billAmount: null,
        },
        addUser: {
          username: ''
        }
    }
  }
  componentDidMount() {
    const id = this.props.match.params.tripid;
    this.props.fetchTrip(id);
  }
  
  handleAddUserChange = e => {
    this.setState({
      addUser: {
        ...this.state.addUser,
        [e.target.name]: e.target.value
      }
    });
  }

  addBill = (e, tripid) => {
    e.preventDefault();
    this.props.addBill(tripid, this.state.newBill)
    .then(() => {
        this.props.fetchTrip(tripid)
    })
    this.setState({
        newBill: {
            billTitle: '',
            billAmount: null,
        }
    })
}

  handleChange = e => {
    this.setState({
        updateTrip: {
            ...this.state.newBill,
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


  pushToTripForm = () => {
    this.props.history.push(`/users/${this.props.tripid}/trip`)
  }

  pushToBillForm = () => {
    this.props.history.push(`/users/${this.props.tripid}/bills`)
  }


  render() {
    const { trip } = this.props;

    if (!trip) {
      return <div>Loading...</div>;
    }

    // sum up all the billAmounts
    const tripTotal = trip.bills.reduce(
      (accu, cur) => accu + cur.billAmount,
      0
    );

    // if we have more than 0 trip users, divide the tripTotal by that number
    // otherwise 0
    const totalPerUser = trip.users.length > 0 ? tripTotal / trip.users.length : 0

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
        <div>Trip Total: {tripTotal}</div>
        <div>Owed Per User: {totalPerUser}</div>

        <form onSubmit={() => this.updateTrip(trip.tripid, this.state.updateTrip)}>
                    <input 
                        type='text'
                        name='billTitle'
                        placeholder='bill'
                        value={this.state.newBill.billTitle}
                        onChange={this.handleChange}
                    />  
                    <input 
                        type='number'
                        name='billAmount'
                        placeholder='amount'
                        value={this.state.newBill.billAmount}
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
            <button onClick={this.pushToTripForm}>Edit Trip</button>
            <button onClick={this.pushToBillForm}>Edit Bills</button>
        <button onClick={() => this.deleteTrip(trip.tripid)}>Delete</button>
        <BillForm addBill={this.props.addBill} tripid={trip.tripid} getBills={this.props.getBills}/> 

        <form
          onSubmit={e => {
            e.preventDefault();
            this.setState({ addUser: { username: '' } });
            this.props
              .addUserToTrip(trip.tripid, this.state.addUser.username)
              .then(() => {
                this.props.fetchTrip(trip.tripid);
              });
          }}
        >
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.addUser.username}
            onChange={this.handleAddUserChange}
            autoComplete="off"
          />
          <button type="submit">Add User</button>
        </form>
        <EndTripButton trip={trip} />
      </div>
    );
  }
}

const maptStateToProps = state => ({
  trip: state.trip,
  fetchingTrip: state.fetchingTrip,
  addingUserToTrip: state.addingUserToTrip
});

export default connect(
  maptStateToProps,
  { fetchTrip, deleteTrip, updateTrip, addBill, getBills, addUserToTrip }
)(Trip);
