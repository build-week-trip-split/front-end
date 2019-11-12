import React from "react";
import Trip from "./Trip";

const PastTrips = ({ pastTrips }) => {
  return (
    <div>
      <h3>Past Trips</h3>
      {pastTrips.map(trip => {
        console.log(trip);
        return <Trip trip={trip} />;
      })}
    </div>
  );
};

export default PastTrips;
