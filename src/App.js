import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
            <Link to='/'></Link>
            <Link to='/signup'></Link>
            <Link to='/user'></Link>
          </div>
          <Route exact path='/' component={Login} />
          <Route path='/signup' component={SignUp} />
          <PrivateRoute exact path='/user'component={HomeContainer} />
        </Router>
      </div>
    );
  }
}


export default App;
