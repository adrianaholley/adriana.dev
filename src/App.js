import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Contact from './Contact.js'
import About from './About.js'
import './App.css';
import React from 'react';


function App() {
  return (
    <div className="App">

      

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/acl" element={<Acl />}/>
          <Route path="/contact" element={<Contact/>}/>
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
