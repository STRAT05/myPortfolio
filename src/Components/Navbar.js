import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import DarkmodeToggle from './DarkmodeToggle';

import '../Styles/Navbar.css';

import logo from '../Assets/images/logo.png';

function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <BootstrapNavbar
      bg={darkMode ? 'dark' : 'light'}
      variant={darkMode ? 'dark' : 'light'}
      expand="lg"
      sticky="top"
      className="shadow-sm"
    >
      <Container>
        <BootstrapNavbar.Brand 
         href="#home"
         className="d-flex align-items-center brand-responsive"
        >
          <img
            src={logo}
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{' '}
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="portfolio-navbar-nav" />
        <BootstrapNavbar.Collapse id="portfolio-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link as="span" className="d-flex align-items-center">
              <DarkmodeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
