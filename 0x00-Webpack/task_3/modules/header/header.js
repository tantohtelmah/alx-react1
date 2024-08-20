// header.js
import $ from 'jquery'; // Import jQuery (make sure it's installed)

// Add the logo and H1 title
const logo = document.createElement('img');
logo.src = 'path/to/your/logo.png'; // Replace with the actual path to your logo

const h1Title = document.createElement('h1');
h1Title.textContent = 'Holberton Dashboard';

// Append logo and title to the header
const header = document.querySelector('header'); // Adjust the selector as needed
header.appendChild(logo);
header.appendChild(h1Title);

// Console log
console.log('Init header');
