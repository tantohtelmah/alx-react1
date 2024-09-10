import $ from 'jquery';
import './header.css';

$(document).ready(function() {
  $('body').prepend('<div id="header"><img src="../assets/holberton-logo.jpg" alt="Holberton Logo"><h1>Holberton Dashboard</h1></div>');
  console.log('Init header');
});
