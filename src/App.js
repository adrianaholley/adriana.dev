import { Routes, Navigate, BrowserRouter, Route } from 'react-router-dom';
import Contact from './Contact.js'
import About from './About.js'
import './App.css';
import React from 'react';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<About/>}/>
          <Route exact path="/acl" element={<Acl />}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route exact path="*" component={() => <Navigate to={"/acl"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Acl() {
  window.location.replace('https://google.com');

  return null
}

export default App;
