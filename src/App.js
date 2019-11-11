import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import SignUp from "./views/SignUp";
import Login from "./views/Login";
import HomePage from "./views/HomePage";

import { addBill, getBills, updateTrip } from "./actions";

class App extends React.Component {
  render() {
    return (
      <StyledDiv>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/user" component={HomePage} />
        </Switch>
      </StyledDiv>
    );
  }
}

const maptStateToProps = state => {
  console.log(state);
  return {
    error: state.error,
    fetchingTrips: state.fetchingTrips,
    trips: state.trips,
    bills: state.bills,
    fetchingBills: false
  };
};

export default connect(
  maptStateToProps,
  { addBill, updateTrip, getBills }
)(App);

const StyledDiv = styled.div`
  width: 800px;
  border: 1px black solid;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background: #9858db;
  padding: 1.5rem;

  .logo {
    width: 175px;
    margin: 0 auto 20px;
  }
  .sub-title {
    margin: 20px;
    color: white;
  }
  .form {
    display: flex;
    flex-direction: column;
    width: 75%;
    margin: 0 auto;

    .input {
      margin: 10px auto 10px auto;
      padding: 10px;
      width: 50%;
    }
    .error {
      margin: 0 auto;
      color: red;
      font-size: 14px;
    }
    .button {
      padding: 5px;
      background: white;
      width: 20%;
      margin: 0 auto;
    }
    .message {
    }
  }
`;
