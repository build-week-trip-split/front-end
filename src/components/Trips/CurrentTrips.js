import React from "react";
import Trip from "./Trip";

const CurrentTrips = ({ currentTrips }) => {
  return (
    <div>
      <h3>Current Trips</h3>
      {currentTrips.map(trip => {
        return <Trip trip={trip} />;
      })}
    </div>
  );
};

export default CurrentTrips;
