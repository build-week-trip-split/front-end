import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addNewUser } from "../actions";
import { Form, Input, Button } from "antd";
import styled from "styled-components";

class SignUp extends React.Component {
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
    if (!this.state.username || !this.state.password) {
      this.setState({
        ...this.state,
        error: "This field is required."
      });
    } else {
      this.props
        .addNewUser(this.state)
        .then(() => this.props.history.push("/login"));
    }
  };

  render() {
    const { username, password, error } = this.state;
    return (
      <StyledDiv>
        <img src="assets/logo.png" alt="logo" className="logo" />
        <h3 className="sub-title">no more headaches spliting the tab.</h3>
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
          <Button onClick={this.handleForm} className="button">
            Sign Up
          </Button>
        </Form>
        <p className="message">
          Already have an account?<Link to="/login">Login</Link>{" "}
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
  { addNewUser }
)(SignUp);

const StyledDiv = styled.div``;
