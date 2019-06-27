import React from "react";
import { connect } from "react-redux";
import { fetchTrip, deleteTrip, addBill, getBills } from "../../actions";

// import BillForm from './BillForm';
// import TripForm from './TripForm';

class Trip extends React.Component {
  constructor(props) {
    console.log(props);
    super();
    this.state ={
        newBill: {
            billTitle: '',
            billAmount: null,
        },
    }
  }
  componentDidMount() {
    const id = this.props.match.params.tripid;
    this.props.fetchTrip(id);
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
        <div>
                <form onSubmit={(e) => this.addBill(e, trip.tripid)}>
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
                    <button>Add Bill</button>
                </form>
        </div>
        <div>
          <button onClick={() => this.deleteTrip(trip.tripid)}>Delete</button>
          <button onClick={this.pushToTripForm}>Edit Trip</button>
          <button onClick={this.pushToBillForm}>Edit Bills</button>
        </div>
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
  { fetchTrip, deleteTrip, addBill, getBills }
)(Trip);
