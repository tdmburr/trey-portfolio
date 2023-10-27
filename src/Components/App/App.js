import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Header from '../Header/Header';
import ProjectPage from '../ProjectPage/ProjectPage';
import ContactPage from '../ContactPage/ContactPage';
import AboutPage from '../AboutPage/AboutPage';

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
          <div className={`loading-container ${loading < 100 ? 'no-background-image' : ''}`}>
            <div className="welcome-text" style={{ opacity: loading / 100 }}>
              Welcome!
            </div>
            <div className="loading-text strobe-text">Loading...</div>
            <div className="loading-bar">
              <div className="loading-progress" style={{ width: `${loading}%` }}></div>
            </div>
            <div className="loading-percentage">{loading}%</div>
          </div>
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;















