import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import BodyContainer from '../BodyContainer/BodyContainer';
import Header from '../Header/Header';
import ProjectPage from '../ProjectPage/ProjectPage'

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
    }, 30);
  }, []);

  return (
    <Router>
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
            <Routes>
              <Route path="/" element={<BodyContainer />} />
              <Route path="/projects" element={<ProjectPage />}/>
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;







