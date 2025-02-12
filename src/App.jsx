import React from 'react';
import './App.css';

function App() {
  const cookieImageUrl = 'https://i.imgur.com/uRcdNeW.jpeg';

  return (
    <div className="App">
      <div className="cookie-consent-banner">
        <div className="cookie-content">
          <img src={cookieImageUrl} alt="Cookie Icon" className="cookie-icon" />
          <p>We use cookies to personalize your site experience and analyze the site traffic.</p>
        </div>
        <div className="cookie-buttons">
          <button className="decline-button">Decline</button>
          <button className="accept-button">Accept</button>
        </div>
      </div>
    </div>
  );
}

export default App;
