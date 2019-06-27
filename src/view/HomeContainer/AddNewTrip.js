import React from "react";

class AddNewTrip extends React.Component {
  state = {
    newTrip: {
      tripname: "",
      startDate: "",
      endDate: ""
    }
  };

  addNewTrip = e => {
    e.preventDefault();
    this.props.addNewTrip(this.state.newTrip).then(() => {
      this.props.getTrips();
    });
    this.setState({
      newTrip: {
        tripname: "",
        startDate: "",
        endDate: ""
      }
    });
  };

  handleChange = e => {
    this.setState({
      newTrip: {
        ...this.state.newTrip,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div className="trip-form">
        <form onSubmit={e => this.addNewTrip(e)}>
          <div>
              <input
                className='add-trip appearance-none bg-transparent border-none w-full text-gray-700 py-5 px-8 leading-tight focus:outline-none'
                type="text"
                name="tripname"
                placeholder="tripname"
                value={this.state.newTrip.tripname}
                onChange={this.handleChange}
                required
              />
              <input
                className='add-trip appearance-none bg-transparent border-none w-full text-gray-700 py-5 px-8 leading-tight focus:outline-none'
                type="date"
                name="startDate"
                placeholder="start date"
                value={this.state.newTrip.startDate}
                onChange={this.handleChange}
                required
              />
              <input
                className='add-trip appearance-none bg-transparent border-none w-full text-gray-700 py-5 px-8 leading-tight focus:outline-none'
                type="date"
                name="endDate"
                placeholder="end date"
                value={this.state.newTrip.endDate}
                onChange={this.handleChange}
                required
              />
            </div>
            <button>Add</button>
        </form>
      </div>
    );
  }
}

export default AddNewTrip;
