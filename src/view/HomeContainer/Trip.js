import React from 'react';
import { connect } from 'react-redux';
import { fetchTrip } from '../../actions';

class Trip extends React.Component {
  constructor(props) {
    console.log(props);
    super();
    this.state = {};
  }
  componentDidMount() {
    const id = this.props.match.params.tripid;
    this.props.fetchTrip(id);
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
  { fetchTrip }
)(Trip);

