import React from "react";

class BillForm extends React.Component {
  state = {
    newBill: {
      billTitle: "",
      billAmount: ""
    }
  };

  handleChange = e => {
    this.setState({
      newBill: {
        ...this.state.newBill,
        [e.target.name]: e.target.value
      }
    });
  };

  addBill = (e, tripid) => {
    e.preventDefault();
    this.props.addBill(tripid, this.state.newBill).then(() => {
      this.props.getBills();
    });
    this.setState({
      newBill: {
        billTitle: "",
        billAmount: ""
      }
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.addBill(e, this.props.tripid)} className='form'>
          <input
            type="text"
            name="billTitle"
            placeholder="bill"
            value={this.state.newBill.billTitle}
            onChange={this.handleChange}
          />
          <input
            type="number"
            name="billAmount"
            placeholder="amount"
            value={this.state.newBill.billAmount}
            onChange={this.handleChange}
          />
          <button>Add Bill</button>
        </form>
      </div>
    );
  }
}

export default BillForm;
