import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Skill from './Components/Skill';
import Project from './Components/Project';
import Contact from './Components/Contact'

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#060420';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <BrowserRouter>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
          <Routes>
            <Route exact path="/" element={<Home mode={mode}/>}/>
            <Route exact path="/skill" element={<Skill mode={mode}/>}/>
            <Route exact path="/Project" element={<Project mode={mode}/>}/>
            <Route exact path="/Contact" element={<Contact mode={mode}/>}/>
          </Routes>
      </BrowserRouter>
    </> 
  );
}
export default App;
