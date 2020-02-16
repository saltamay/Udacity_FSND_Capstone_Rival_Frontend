import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
