/* eslint-disable linebreak-style */
// const $ = require('jquery');
// import $ from 'jquery';
// import './style.scss';

// let sec = 0;

// function seconds() {
//   sec += 1;
//   console.log('function called');
//   $('#main').html(`You have been here for ${sec} seconds`);
// }

// setInterval(seconds, 1000);

// ^^^ old

import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const App = () => <div className="test">All the REACT are belong to us!</div>;

ReactDOM.render(<App />, document.getElementById('main'));
