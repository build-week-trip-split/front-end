import React from "react";

const Trip = ({ trip }) => {
  return (
    <div>
      <h4>{trip.tripname}</h4>
      <p>{trip.startDate}</p>
      <p>{trip.endDate}</p>
    </div>
  );
};

export default Trip;
