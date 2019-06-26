import React from 'react';
import { connect } from 'react-redux';
import { endTrip } from '../../actions';

// Button to end trips, takes an optional onComplete prop
// which is a callback which is fired after the endTrip
// request completes
const EndTripButton = ({ trip, endTrip, onComplete }) => {
  return (
    <button
      onClick={() => {
        endTrip(trip.tripid).then(() => onComplete && onComplete(trip));
      }}
    >
      EndTripButton
    </button>
  );
};

export default connect(
  null,
  { endTrip }
)(EndTripButton);
