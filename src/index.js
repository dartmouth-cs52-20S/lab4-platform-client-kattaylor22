/* eslint-disable linebreak-style */
// const $ = require('jquery');
import $ from 'jquery';
import './style.scss';

let sec = 0;

function seconds() {
  sec += 1;
  console.log('function called');
  $('#main').html(`You have been here for ${sec} seconds`);
}

setInterval(seconds, 1000);
