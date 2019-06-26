import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';

import Login from './view/Login';
import SignUp from './view/SignUp';
import HomeContainer from './view/HomeContainer/HomeContainer';
import PrivateRoute from './view/PrivateRoute';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Link to="/" />
          <Link to="/signup" />
          <Link to="/users" />
        </div>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute exact path="/users" component={HomeContainer} />
      </div>
    );
  }
}

export default App;
