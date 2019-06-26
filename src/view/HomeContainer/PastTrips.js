import React from 'react';


const PastTrips = props => {
    console.log(props)
        return (
            <div>
            {/* {props.trips.completed === false ?  */}
            {props.trips.map(trip => {
                return (
                    <div key={trip.tripid}>
                        <p>{trip.startDate}</p>
                        <p>{trip.endDate}</p>
                        <p>{trip.tripname}</p>
                    </div>
                )
            })}
            </div>   
           )
}

export default PastTrips; 