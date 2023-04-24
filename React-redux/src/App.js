import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Moviedetails from './components/MovieDetails/Index';

import './App.css';

function App() {
  return (
    <>
      <div className='app'>App</div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/moviedetails" element={<Moviedetails />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
