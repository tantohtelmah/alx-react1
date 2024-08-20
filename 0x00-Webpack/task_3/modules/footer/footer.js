// footer.js
import $ from 'jquery'; // Import jQuery (make sure it's installed)

// Create a paragraph for the copyright text
const copyrightText = document.createElement('p');
copyrightText.textContent = 'Copyright - Holberton School';

// Append the paragraph to the footer
const footer = document.querySelector('footer'); // Adjust the selector as needed
footer.appendChild(copyrightText);
