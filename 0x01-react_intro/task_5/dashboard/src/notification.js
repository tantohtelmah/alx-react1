import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils'; 

function Notifications() {
	const handleButtonClick = () => {
        console.log('Close button has been clicked');
    };
	return (
        <div className="Notifications">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
			sed do eiusmod tempor incididunt ut labore et dolore magna 
			aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
			ullamco laboris nisi ut aliquip ex ea commodo consequat
            <p>Here is the list of notifications</p>
			<button
                style={{
                    float: 'right', // Show button on the right side
                }}
                aria-label="Close"
                onClick={handleButtonClick}
            ></button>
            <img src={closeIcon} alt="Close icon" />
			<p dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
			<ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
            </ul>
        </div>
    );
}

export default Notifications;
