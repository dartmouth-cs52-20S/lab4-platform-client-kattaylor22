/* eslint-disable linebreak-style */
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import './style.scss';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { ActionTypes } from './actions/index';
import reducers from './reducers';
import App from './components/app';


// this creates the store with the reducers, and does some other stuff to initialize devtools
// boilerplate to copy, don't have to know
const store = createStore(reducers, {}, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
));

const token = localStorage.getItem('token');
if (token) {
  store.dispatch({ type: ActionTypes.AUTH_USER });
}

// we now wrap App in a Provider
ReactDOM.render(
  <Provider store={store}>
    <div id="header">
      <h1>COMPLAIN</h1>
      <h2 id="subtitle">Enter Complaints Below</h2>
    </div>
    <App />
  </Provider>,
  document.getElementById('main'),
);
