import React from 'react';
import './App.css';
import Create from './components/Create';
import Home from './components/Home'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Read from './components/Read';
import Update from './components/Update';

function App() {
  return (
    <>
    <div className="App">
      <h1>CURD</h1>
     
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/read" element={<Read/>} />
        <Route path="/edit/:id" element={<Update/>} />
      </Routes>
      </Router>
  
    </div>
    </>
  );
}

export default App;
