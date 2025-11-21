// src/components/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';

function Footer({ darkMode }) {
  return (
    <footer className={`py-3 mt-5 w-100 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <Container className="text-center">
        <small>
          &copy; {new Date().getFullYear()} Jede Isaiah Maxweil Pega &mdash; All rights reserved.<br/>
          Built with React, Bootstrap, and Docker
        </small>
        <div className="mt-2 justify-content-center d-flex gap-2">
          <a
            href="https://github.com/STRAT05"
            target="_blank"
            rel="noopener noreferrer"
            className={`${darkMode ? "text-light" : "text-dark"}`}
            style={{ textDecoration: "none" }}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={darkMode ? "text-light" : "text-dark"}
            style={{ textDecoration: "none" }}
          >
            LinkedIn
          </a>

          <a
            href="https://www.facebook.com/PogiNah/"
            target="_blank"
            rel="noopener noreferrer"
            className={darkMode ? "text-light" : "text-dark"}
            style={{ textDecoration: "none" }}
          >
            Facebook
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

