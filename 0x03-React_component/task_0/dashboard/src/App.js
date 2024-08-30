import React from 'react';
import Notifications from './Notifications'; // Import Notifications component
import Header from './Header'; // Import Header component
import Login from './Login'; // Import Login component
import Footer from './Footer'; // Import Footer component
import './App.css';

function App() {
  return (
    <>
      <Notifications /> {/* Add Notifications component */}
      <div className="App">
        <Header /> {/* Replace header code with Header component */}
        <div className="App-body">
          <Login /> {/* Replace login code with Login component */}
          {/* Other content */}
        </div>
        <Footer /> {/* Replace footer code with Footer component */}
      </div>
    </>
  );
}

export default App;
