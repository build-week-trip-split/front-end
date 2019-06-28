import React from "react";

class TripFrom extends React.Component {
  state = {
    updateTrip: {
      tripname: "",
      startDate: "",
      endDate: ""
    }
  };

  componentDidMount() {
    this.props.getBills();
  }
  updateTrip = (e, updateTrip) => {
    e.preventDefault();
    const tripid = localStorage.getItem("tripid");
    this.props.updateTrip(tripid, updateTrip).then(() => {
      this.props.history.push(`/users/${tripid}`);
    });
    localStorage.removeItem("tripid");
  };

  handleChange = e => {
    this.setState({
      updateTrip: {
        ...this.state.updateTrip,
        [e.target.name]: e.target.value
      }
    });
  };
  render() {
    return (
      <div className='trip-form-container'>
        <h2>Edit Trip</h2>
        <form onSubmit={e => this.updateTrip(e, this.state.updateTrip)}>
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
          <button className='update-trip-button'>Update</button>
        </form>
      </div>
    );
  }
}

export default TripFrom;
