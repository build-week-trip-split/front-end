import React from 'react';
// import { connect } from 'react-redux';

import CurrentTrip from './CurrentTrip';
import PastTrips from './PastTrips';
import AddNewTrip from './AddNewTrip';
import Navbar from './Navbar'; 

class HomeContainer extends React.Component {
    render(){
        return (
            <div>
                <div className='user-profile'>
                    <img src='' alt='' />
                    <h2>Joe Doe</h2>
                </div>
                <div>
                    <CurrentTrip />
                    <PastTrips />
                    <AddNewTrip />
                    <Navbar />
                </div>
            </div>
        )
    }
}

// const maptStateToProps = state => {
//     console.log(state);
//     return {
//         error: state.error,
        
//     }
// }

// export default connect (maptStateToProps, {  })(HomeContainer);

export default HomeContainer;