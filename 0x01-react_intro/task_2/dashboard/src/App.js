import logo from './logo.svg';
import './App.css';
import React from 'react';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  const isIndexPage = true; // Set this based on whether it's the index page or not
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="App-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat
        <p>Login to access the full dashboard</p>
      </div>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <button>OK</button>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
            <footer className="App-footer">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat
        <p>&copy; {getFullYear()} - {getFooterCopy(isIndexPage)}</p>
        <p>Copyright 2020 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
