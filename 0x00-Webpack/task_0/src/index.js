// src/index.js
import $ from 'jquery';

function addParagraphs() {
  // const paragraph1 = $('<p>').text('Holberton Dashboard');
  // const paragraph2 = $('<p>').text('Dashboard data for the students');
  // const paragraph3 = $('<p>').text('Copyright - Holberton School');
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  // $('body').append(paragraph1, paragraph2, paragraph3);
}

addParagraphs();
