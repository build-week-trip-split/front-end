import React from 'react';

const CurrentTrip = props => {
    return (
        <div>
            {/* {props.trips.completed ?  */}
            {props.trips.map(trip => {
            
                return (
                    <div key={trip.tripid}>
                        <p>{trip.startDate}</p>
                        <p>{trip.endDate}</p>
                        <p>{trip.tripname}</p>
                        <button>Update</button>
                        <button onClick={() => props.deleteTrip(trip.tripid)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default CurrentTrip;