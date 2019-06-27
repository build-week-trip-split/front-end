import React from "react";

import { Link } from "react-router-dom";

const PastTrip = props => {
  console.log(props);
  const PastTrips = props.trips.map(trip => {
    return (
      <div key={trip.tripid} className='trips past'>
        {trip.completed ? (
          <Link to={`/users/${trip.tripid}`}>
            <p>{trip.tripname}</p>
            <small>{trip.startDate} - {trip.endDate}</small>
          </Link>
        ) : null}
      </div>
    );
  });

  return (
    <div>
      <h4>Past Trips</h4>
      <div>{PastTrips}</div>
    </div>
  );
};

export default PastTrip;
