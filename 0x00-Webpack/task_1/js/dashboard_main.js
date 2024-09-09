import $ from 'jquery';
import debounce from 'lodash/debounce';

function addParagraphs() {
  const paragraph1 = $('<p>').text('Holberton Dashboard');
  const paragraph2 = $('<p>').text('Dashboard data for the students');
  const button1 = $('button').text('Click here to get started')
  const paragraph3 = $('<p>').attr('id', 'count')
  const paragraph4 = $('<p>').text('Copyright - Holberton School');

  $('body').append(paragraph1, paragraph2, button1, paragraph3, paragraph4);
}

addParagraphs();

$(document).ready(function (){
	function updateCounter(){
		let count = 0;
		$('#count').text(`${count} clicks on the button`)
	}
	
	const debounceUpdateCounter = debounce(updateCounter, 500);
	
	$('button').on('click', debounceUpdateCounter);
});