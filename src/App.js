import React from 'react';
import {  Routes ,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Signup from './Components/Signup/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login/Login';


function App() {
  return (
    
      <div>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route exact path="/" element={<Home />} /> 
        </Routes>
      </div>
      
    
  );
}

export default App;
