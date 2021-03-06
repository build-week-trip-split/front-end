import React from "react";

import { connect } from "react-redux";
import { logIn } from "../actions";
import NavbarOut from "../NavbarOut";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  logIn = e => {
    e.preventDefault();
    this.props.logIn(this.state.credentials).then(() => {
      this.props.history.push("/users");
    });
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  pushToSignUpForm = () => {
    this.props.history.push("/signup");
  };

  render() {
    return (
      <div className='login-container'>
        <NavbarOut />
          <img src='assets/logo.png' alt='' />
          <h4>hassle-free tab splitting</h4>
          <form onSubmit={this.logIn}>
            <div className='login-form'>
              <div>
                <input
                  className='login-input appearance-none bg-white border-none w-full text-gray-700 py-5 px-8 leading-tight focus:outline-none'
                  type="text"
                  name="username"
                  placeholder="username"
                  value={this.state.credentials.username}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <input
                  className='login-input appearance-none bg-white border-none w-full text-gray-700 py-5 px-8 leading-tight focus:outline-none'
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.credentials.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button className='login-button flex-shrink-0 hover:border-white-700 text-md py-2 px-4 rounded'><p>Log In</p></button>
        </form>
        <button onClick={this.pushToSignUpForm} className='signup-button bg-gray-600 flex-shrink-0 hover:border-white-700 text-md py-2 px-4 rounded'><p>Sign Up</p></button>
      </div>
    );
  }
}

const maptStateToProps = state => {
  console.log(state);
  return {
    error: state.error,
    isLoggingIn: state.isLoggingIn
  };
};

export default connect(
  maptStateToProps,
  { logIn }
)(Login);

