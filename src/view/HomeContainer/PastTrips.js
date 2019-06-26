import React from 'react';



const PastTrip = props => {
    console.log(props)
        const PastTrips = props.trips.map(trip => {
            return (
                <div key={trip.tripid}>
                    {trip.completed === false ? 
                            <p>{trip.tripname}</p>
                    : null }
                </div>
            )
        }) 
        
            return (
                <div>
                    <div>
                        {PastTrips}
                    </div>
    
                </div>
            )
    }
    
    export default PastTrip;