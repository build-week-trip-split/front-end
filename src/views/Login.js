import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../actions";
import { Form, Input, Button } from "antd";
import styled from "styled-components";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    error: ""
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  handleForm = () => {
    console.log("hello");
    if (!this.state.username || !this.state.password) {
      this.setState({
        ...this.state,
        error: "This field is required."
      });
    } else {
      this.props.login(this.state).then(() => this.props.history.push("/user"));
    }
  };

  render() {
    const { username, password, error } = this.state;
    return (
      <StyledDiv>
        <img src="assets/logo.png" alt="logo" className="logo" />
        <h3 className="sub-title">hassle-free tab splitting.</h3>
        <Form onSubmit={() => this.handleForm()} className="form">
          <Input
            name="username"
            className="input"
            placeholder="Enter a Username"
            value={username}
            onChange={this.handleChange}
          />
          {error && !username && <p className="error">{error}</p>}
          <Input
            name="password"
            className="input"
            placeholder="Choose a Password"
            value={password}
            onChange={this.handleChange}
            type="password"
          />
          {error && !password && <p className="error">{error}</p>}
          <Button className="button" onClick={this.handleForm}>
            Login
          </Button>
        </Form>
        <p className="message">
          Don't have an account?<Link to="/signup">Sign Up</Link>{" "}
        </p>
      </StyledDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSigningUp: state.isSigningUp
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Login);

const StyledDiv = styled.div``;
