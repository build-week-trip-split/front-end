import React from "react";

import { Link } from 'react-router-dom';

const PastTrip = props => {
  console.log(props);
  const PastTrips = props.trips.map(trip => {
    return (
      <div key={trip.tripid}>
        {trip.completed ? 
         <Link to={`/users/${trip.tripid}`}>
         <p>{trip.tripname}</p>
        </Link>
        : null}
      </div>
    );
  });

  return (
    <div>
      <div>{PastTrips}</div>
    </div>
  );
};

export default PastTrip;
