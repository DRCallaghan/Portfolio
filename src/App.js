import './index.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div className="bucket-app">
      <Router>
        <div>
          <Routes>
            <Route
              path='/'
              element={<AboutMe />}
            />
            <Route
              path='/contact'
              element={<Contact />}
            />
            {/* <Route
              path='/'
              element={<Portfolio />}
            /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
