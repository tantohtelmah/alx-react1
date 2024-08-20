// body.js
import $ from 'jquery'; // Import jQuery
import _ from 'lodash'; // Import Lodash

// Create a button and counter
const button = document.createElement('button');
button.textContent = 'Click me';
let counter = 0;

// Attach event listener to the button
button.addEventListener('click', () => {
  counter++;
  console.log(`Button clicked! Counter: ${counter}`);
});

// Append button to the body
document.body.appendChild(button);
