import React from "react";
import { connect } from "react-redux";
import { addNewUser } from "../actions";

class SignUp extends React.Component {
  state = {
    addNewUser: {
      username: "",
      password: ""
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
      <div className='signup-container'>
        <h2>Sign Up!</h2>
          <form onSubmit={e => this.addNewUser(e)}>
            <div className='input-container'>
              <div className='input'>
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  value={this.state.addNewUser.username}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.addNewUser.password}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  value={this.state.addNewUser.email}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone_number"
                  placeholder="phone number"
                  value={this.state.addNewUser.phone_number}
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className='signup-buttons'>
              <button className='signup-button bg-gray-600 flex-shrink-0 hover:border-white-700 text-md py-2 px-4 rounded'>Sign Up</button>
              <button onClick={this.pushToLoginForm}className='login-button flex-shrink-0 hover:border-white-700 text-md py-2 px-4 rounded'><p>Log In</p></button>
            </div>
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
