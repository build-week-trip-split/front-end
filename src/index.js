import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

const AppWithRouter = withRouter(App);
ReactDOM.render(

    <Provider store={store}>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>, 
    document.getElementById('root'));

