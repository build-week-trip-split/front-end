import React from "react";
import { connect } from "react-redux";
import { addNewUser } from "../actions";

class SignUp extends React.Component {
  state = {
    addNewUser: {
      username: "",
      password: "",
      email: "",
      phone_number: ""
    }
  };

  handleChange = e => {
    this.setState({
      addNewUser: {
        ...this.state.addNewUser,
        [e.target.name]: e.target.value
      }
    });
  };

  addNewUser = e => {
    e.preventDefault();
    this.props.addNewUser(this.state.addNewUser).then(() => {
      this.props.history.push("/");
    });
  };

  pushToLoginForm = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.addNewUser(e)}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.addNewUser.username}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.addNewUser.password}
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.state.addNewUser.email}
            onChange={this.handleChange}
          />
          <input
            type="tel"
            name="phone_number"
            placeholder="phone number"
            value={this.state.addNewUser.phone_number}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            onChange={this.handleChange}
          />
          <small>Format: 123-456-7890</small>
          <button>Sign Up</button>
          <button>Log In</button>
        </form>
      </div>
    );
  }
}

const maptStateToProps = state => {
  console.log(state);
  return {
    error: state.error,
    isSigningUp: state.isSigningUp
  };
};

export default connect(
  maptStateToProps,
  { addNewUser }
)(SignUp);
