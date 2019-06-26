import React from 'react';

import Trip from './Trip';

import { Route, Link, withRouter } from 'react-router-dom';

const CurrentTrip = props => {

const TripList = props.trips.map(trip => {
    return (
        <div key={trip.tripid}>
            <Link to={`/users/${trip.tripid}`}>
            <p>{trip.tripid}</p>
        </Link>
        </div>
    )
}) 
    
        return (
            <div>
                <div>
                  {TripList}
                </div>
                    <Route path='/users/:tripid' render={props => <Trip {...props} trip={props.trips} updateTrip={props.updateTrip} 
                                    deleteTrip={props.deleteTrip}/>}/>
            </div>
        )
}

export default withRouter(CurrentTrip);