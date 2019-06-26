import React from 'react';
import { connect } from 'react-redux';

import CurrentTrip from './CurrentTrip';
import PastTrips from './PastTrips';
import AddNewTrip from './AddNewTrip';
import Navbar from './Navbar'; 

import { getTrips, deleteTrip } from '../../actions';

class HomeContainer extends React.Component {

       componentDidMount() {
        this.props.getTrips() 
    }

    logout = e => {
        e.preventDefault();
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        this.props.history.push('/')
    }

    render(){
        return (
            <div>
                <div className='user-profile'>
                    <img src='' alt='' />
                    <h2>Joe Doe</h2>
                </div>
                <button onClick={this.logout}>Log Out</button>
                <div>
                    <CurrentTrip trips={this.props.trips} deleteTrip={this.props.deleteTrip}/>
                    <PastTrips trips={this.props.trips}/>
                    <AddNewTrip />
                    <Navbar />
                </div>
            </div>
        )
    }
}

const maptStateToProps = state => {
    console.log(state);
    return {
        error: state.error,
        fetchingTrips: state.fetchingTrips,
        trips: state.trips
        
    }
}

export default connect (maptStateToProps, { getTrips, deleteTrip })(HomeContainer);

