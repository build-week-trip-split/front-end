import React from 'react';

class Trip extends React.Component {
    constructor(props){
        console.log(props)
        super()
        this.state={

        }
    }
    componentDidMount() {
        const id = this.props.match.params.tripid;
        this.props.fetchTrip(id)
    }

}

export default Trip; 