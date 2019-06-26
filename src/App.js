import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';


import Trip from './view/HomeContainer/Trip';

import Login from './view/Login';
import SignUp from './view/SignUp';
import HomeContainer from './view/HomeContainer/HomeContainer';
import PrivateRoute from './view/PrivateRoute';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Link to='/'>Home</Link>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/users'>User</Link>
          </div>
          <Route exact path='/' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route path="/users/:tripid" render={props => <Trip {...props} />} />
          <PrivateRoute exact path='/users'component={HomeContainer} />
        </Router>
      </div>
    );
  }
}


 export default App; 
