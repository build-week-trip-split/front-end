import React from "react";

import { Link } from "react-router-dom";

const CurrentTrip = props => {
  console.log(props);
  const CurrentTrips = props.trips.map(trip => {
    return (
      <div key={trip.tripid} className='trips'>
        {trip.completed === false ? (
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
      <h4>Current Trips</h4>
      <div>{CurrentTrips}</div>
    </div>
  );
};

export default CurrentTrip;
