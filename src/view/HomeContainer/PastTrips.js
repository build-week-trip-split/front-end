import React from 'react';

import { getTrips } from '../../actions';
import { connect } from 'react-redux';

class PastTrips extends React.Component {

    componentDidMount() {
        this.props.getTrips() 
    }

    render() {
        return (
            <div>
                PastTrip
            </div>   
           )
    }
}

const mapStateToProps = state => {
    return {
        error: state.error,
        fetchingTrips: state.fetchingTrips,
        pastTrips: state.pastTrips
    }
}

export default connect(mapStateToProps, { getTrips })(PastTrips)