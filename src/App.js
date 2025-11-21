// src/App.js
import React, { useState } from 'react';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Skills from './Components/Skills.js';
import Projects from './Components/Projects.js';
import Contact from './Components/Contact.js'; 
import Footer from './Components/Footer.js';
import './Styles/App.css'; 

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Home darkMode={darkMode} />
        <About darkMode={darkMode}/>
        <Skills darkMode={darkMode}/>
        <Projects darkMode={darkMode}/>
        <Contact darkMode={darkMode}/>
        <Footer darkMode={darkMode} />
      </main>
    </div>
  );
}

export default App;
