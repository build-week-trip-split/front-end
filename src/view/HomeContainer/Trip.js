import React from "react";
import { connect } from "react-redux";
import {
  fetchTrip,
  deleteTrip,
  updateTrip,
  addBill,
  getBills,
  addUserToTrip,
  deleteBill,
  deleteUser
} from "../../actions";

import BillForm from "../HomeContainer/BillForm";
import EndTripButton from "./EndTripButton";

class Trip extends React.Component {
  constructor(props) {
    console.log(props);
    super();
    this.state = {
      newBill: {
        billTitle: "",
        billAmount: ""
      },
      addUser: {
        username: ""
      }
    };
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
  };

  addBill = (e, tripid) => {
    e.preventDefault();
    this.props.addBill(tripid, this.state.newBill).then(() => {
      this.props.fetchTrip(this.props.trip.tripid);
    });
    this.setState({
      newBill: {
        billTitle: "",
        billAmount: ""
      }
    });
  };

  deleteBill = billid => {
    this.props.deleteBill(billid).then(() => {
      this.props.fetchTrip(this.props.trip.tripid);
    });
  };

  handleChange = e => {
    this.setState({
      updateTrip: {
        ...this.state.newBill,
        [e.target.name]: e.target.value
      }
    });
  };

  deleteTrip = tripid => {
    this.props.deleteTrip(tripid).then(() => {
      this.props.history.push("/users");
    });
  };

  pushToTripForm = () => {
    this.props.history.push(`/users/${this.props.trip.tripid}/trip`);
    localStorage.setItem("tripid", this.props.trip.tripid);
  };

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
    const totalPerUser =
      trip.users.length > 0 ? tripTotal / trip.users.length : 0;

    return (
      <div>
        <div>tripid: {trip.tripid}</div>
        <div>completed: {trip.completed ? "True" : "False"}</div>
        <div>endDate: {trip.endDate}</div>
        <div>startDate: {trip.startDate}</div>
        <div>endDate: {trip.endDate}</div>
        <div>madeByWhom: {trip.madeByWhom}</div>
        <div>tripname: {trip.tripname}</div>
        {/* <div>users: {trip.users.map(u => u.username)}</div> */}
        <div>
          users:{" "}
          {trip.users.map(u => {
            return (
              <div key={u.userid}>
                <small>{u.username}</small>
                <button
                  onClick={() =>
                    this.props.deleteUser(u.userid).then(() => {
                      this.props.fetchTrip(trip.tripid);
                    })
                  }
                >
                  x
                </button>
              </div>
            );
          })}
        </div>
        <div>
          bills:{" "}
          {trip.bills.map(bill => {
            console.log(bill);
            return (
              <div key={bill.billid}>
                <small>{bill.billTitle}</small>
                <small>{bill.billAmount}</small>
                <button onClick={() => this.deleteBill(bill.billid)}>x</button>
              </div>
            );
          })}
          {/* bills:{" "}
          {trip.bills
            .map(b => [b.billTitle, b.billAmount].join(": "))
            .join(",")
            } */}
        </div>
        <div>Trip Total: {tripTotal}</div>
        <div>Owed Per User: {totalPerUser}</div>

        <button onClick={this.pushToTripForm}>Edit Trip</button>

        <BillForm
          addBill={this.props.addBill}
          tripid={trip.tripid}
          getBills={this.props.getBills}
        />

        <form
          onSubmit={e => {
            e.preventDefault();
            this.setState({ addUser: { username: "" } });
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
        <button onClick={() => this.deleteTrip(trip.tripid)}>Delete</button>
        <EndTripButton trip={trip} history={this.props.history} />
      </div>
    );
  }
}

const maptStateToProps = state => ({
  trip: state.trip,
  users: state.trip,
  fetchingTrip: state.fetchingTrip,
  addingUserToTrip: state.addingUserToTrip
});

export default connect(
  maptStateToProps,
  {
    fetchTrip,
    deleteTrip,
    updateTrip,
    addBill,
    getBills,
    addUserToTrip,
    deleteBill,
    deleteUser
  }
)(Trip);
