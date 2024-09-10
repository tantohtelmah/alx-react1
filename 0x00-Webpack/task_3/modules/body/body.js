import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$(document).ready(function() {
  $('body').append('<div id="body"><button id="counter">Click me</button><p id="count">0 clicks on the button</p></div>');

  let count = 0;
  $('#counter').on('click', _.debounce(function() {
    count++;
    $('#count').text(count);
  }, 300));
});
