import React from "react";

import { Form, Input, DatePicker, Button } from "antd";

class AddTripForm extends React.Component {
  state = {
    tripname: "",
    startDate: "",
    endDate: ""
  };

  handleChange = (name, value) => {
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const addedTrip = {
      ...this.state,
      startDate: this.state.startDate.unix(),
      endDate: this.state.endDate.unix()
    };

    this.props.addNewTrip(addedTrip);
  };

  render() {
    const { tripname, startDate, endDate } = this.state;

    return (
      <div>
        <Form onSubmit={() => this.handleSubmit}>
          <Input
            name="tripName"
            className="input"
            placeholder="Enter the name of the trip"
            value={tripname}
            onChange={e => this.handleChange("tripname", e.target.value)}
          />

          <DatePicker
            name="startDate"
            placeholder="Pick a start date"
            format="MM/DD/YYYY"
            value={startDate}
            onChange={value => this.handleChange("startDate", value)}
          />
          <DatePicker
            name="endDate"
            placeholder="Pick a end date"
            format="MM/DD/YYYY"
            value={endDate}
            onChange={value => this.handleChange("endDate", value)}
          />
          <Button onClick={this.handleSubmit}>Add</Button>
        </Form>
      </div>
    );
  }
}
export default AddTripForm;
