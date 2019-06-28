import React from 'react';

import { Link } from 'react-router-dom';

const CurrentTrip = props => {
  console.log(props);
  const CurrentTrips = props.trips
    .filter(trip => !trip.completed)
    .map(trip => {
      return (
        <div key={trip.tripid} className="trips">
          <Link to={`/users/${trip.tripid}`}>
            <p>{trip.tripname}</p>
            <small>
              {trip.startDate} - {trip.endDate}
            </small>
          </Link>
        </div>
      );
    });

  if(CurrentTrips.length === 0) {
    return null
  }

  return (
    <div>
      <h4>Current Trips</h4>
      <div>{CurrentTrips}</div>
    </div>
  );
};

export default CurrentTrip;
