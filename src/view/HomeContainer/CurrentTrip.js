import React from "react";

import { Link } from "react-router-dom";

const CurrentTrip = props => {
  console.log(props);
  const CurrentTrips = props.trips.map(trip => {
    return (
      <div key={trip.tripid}>
        {trip.completed  === false ? (
          <Link to={`/users/${trip.tripid}`}>
            <p>{trip.tripname}</p>
          </Link>
        ) : null}
      </div>
    );
  });

  return (
    <div>
      <div>{CurrentTrips}</div>
    </div>
  );
};

export default CurrentTrip;
