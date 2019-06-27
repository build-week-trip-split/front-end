import React from "react";

class TripFrom extends React.Component {
  state = {
    updateTrip: {
        tripname: '',
        startDate: '',
        endDate: '', 
    }
  }
  updateTrip = (e, updateTrip) => {
    e.preventDefault();
    this.props.updateTrip(updateTrip)
    // this.props.history.push('/')
}

updateFormState = (e, tripBeingUpdate) => {
    e.preventDefault();
    this.setState({
        updateTrip: {
            tripname: this.props.trip.tripname,
            startDate: this.props.trip.startDate,
            endDate: this.props.trip.endDate
        }
    })
}   

handleChange = e => {
    this.setState({
        updateTrip: {
            ...this.state.updateTrip,
            [e.target.name]: e.target.value
        }
    })
}
  render() {
    return (
      <div>
        <form
          onSubmit={e => this.updateTrip(e, this.state.updateTrip)}
        >
          <input
            type="text"
            name="tripname"
            placeholder="tripname"
            value={this.state.updateTrip.tripname}
            onChange={this.handleChange}
          />
          <input
            type="date"
            name="startDate"
            placeholder="start date"
            value={this.state.updateTrip.startDate}
            onChange={this.handleChange}
          />
          <input
            type="date"
            name="endDate"
            placeholder="end date"
            value={this.state.updateTrip.endDate}
            onChange={this.handleChange}
          />
          <button>Update</button>
        </form>
      </div>
    );
  }
}

export default TripFrom; 