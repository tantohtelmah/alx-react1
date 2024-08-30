// Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS for styling

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      © {year} Your Company Name
    </footer>
  );
}

export default Footer;
