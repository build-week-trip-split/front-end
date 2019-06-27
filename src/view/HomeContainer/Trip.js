import React from 'react';
import { connect } from 'react-redux';
import { fetchTrip, addUserToTrip } from '../../actions';
import EndTripButton from './EndTripButton';

class Trip extends React.Component {
  constructor(props) {
    console.log(props);
    super();
    this.state = {
      addUser: {
        username: ''
      }
    };
  }
  componentDidMount() {
    const id = this.props.match.params.tripid;
    this.props.fetchTrip(id);
  }

  handleChange = e => {
    this.setState({
      addUser: {
        ...this.state.addUser,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    const { trip } = this.props;

    if (!trip) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div>tripid: {trip.tripid}</div>
        <div>completed: {trip.completed ? 'True' : 'False'}</div>
        <div>endDate: {trip.endDate}</div>
        <div>startDate: {trip.startDate}</div>
        <div>endDate: {trip.endDate}</div>
        <div>madeByWhom: {trip.madeByWhom}</div>
        <div>tripname: {trip.tripname}</div>
        <div>users: {trip.users.map(u => u.username).join(', ')}</div>
        <div>
          bills:{' '}
          {trip.bills
            .map(b => [b.billTitle, b.billAmount].join(': '))
            .join(',')}
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.setState({ ...this.state, addUser: { username: '' } });
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
            onChange={this.handleChange}
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
  { fetchTrip, addUserToTrip }
)(Trip);

