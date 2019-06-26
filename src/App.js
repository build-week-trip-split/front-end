import React from 'react';
import './App.css';
import { withRouter, Route, Link } from 'react-router-dom';

import Login from './view/Login';
import SignUp from './view/SignUp';
import HomeContainer from './view/HomeContainer/HomeContainer';
import PrivateRoute from './view/PrivateRoute';
import Trip from './view/HomeContainer/Trip';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Link to="/">Home</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/users">Users</Link>
        </div>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute exact path="/users" component={HomeContainer} />
        <Route path="/users/:tripid" render={props => <Trip {...props} />} />
      </div>
    );
  }
}

export default withRouter(App);
