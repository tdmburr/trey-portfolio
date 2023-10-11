import React, { useState, useEffect } from 'react';
import './App.css';
import BodyContainer from '../BodyContainer/BodyContainer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

function App() {
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading((prevLoading) => {
        if (prevLoading < 100) {
          return prevLoading + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 30); // Adjust the interval speed as needed
  }, []);

  return (
    <div className="App">
      {loading < 100 ? (
        <div className="loading-container">
          <div className="loading-text strobe-text">Loading...</div>
          <div className="loading-bar">
            <div
              className="loading-progress"
              style={{ width: `${loading}%` }}
            ></div>
          </div>
          <div className="loading-percentage">{loading}%</div>
        </div>
      ) : (
        <>
          <Header />
          <BodyContainer />
          <Navbar />
        </>
      )}
    </div>
  );
}

export default App;






