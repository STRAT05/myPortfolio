// src/components/DarkModeToggle.js
import React from 'react';

function DarkmodeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button onClick={toggleDarkMode} className="btn btn-outline-secondary btn-sm">
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default DarkmodeToggle;
