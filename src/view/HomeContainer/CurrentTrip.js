import React from 'react';

import Trip from './Trip';

import { Route, Link, withRouter } from 'react-router-dom';

const CurrentTrip = props => {
console.log(props)
    const TripList = props.trips.map(trip => {
        return (
            <div key={trip.tripid}>
                <Link to={`/users/${trip.tripid}`}>
                    <p>{trip.tripname}</p>
                </Link>
            </div>
        )
    }) 
    
        return (
            <div>
                <div>
                  {TripList}
                </div>
                    <Route path='/users/:tripid' render={props => <Trip {...props} trip={props.trips} updateTrip={props.updateTrip} deleteTrip={props.deleteTrip} fetchTrip={props.fetchTrip}/>}/>
            </div>
        )
}

export default withRouter(CurrentTrip);