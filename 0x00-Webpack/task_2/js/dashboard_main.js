import $ from 'jquery';
import debounce from 'lodash/debounce';
import '../css/main.css'

function addParagraphs() {
	$('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button>Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');
}

addParagraphs();

$(document).ready(function (){
	// Function to update the counter
	let count = 0;
	function updateCounter() {
		count++;
		$('#count').text(`${count} clicks on the button`);
	}
   
   const debounceUpdateCounter = debounce(updateCounter, 500);
   
   $('button').on('click', debounceUpdateCounter);
});
