// src/components/Home.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Home({darkMode}) {
  return (
    <section id="home" className="py-5 d-flex align-items-center" style={{ minHeight: '70vh' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={7}>
            <h1 className="display-3 fw-bold mb-4">
              Hello, I'm <span className="text-primary">Jede Isaiah Maxweil Pega</span>
            </h1>
            <h2 className="h4 mb-4">
              An Aspiring Full-Stack Developer!
            </h2>
            <p className="lead mb-4">
              Welcome to my portfolio! I specialize in building modern web applications using React, Laravel, and Docker. Explore my projects and skills to see how I can contribute to your next big idea.
            </p>
            <Button href="#projects" variant="primary" size="lg" className="me-3">
              View Projects
            </Button>
            <Button href="#about" 
                    variant={darkMode ? "outline-light" : "outline-dark"}
                    size="lg">
                    Learn More
            </Button>
          </Col>
          <Col md={5} className="text-center d-none d-md-block">
            {/* Optional: image here */}
            {/* <img
              src="/profile-picture.png"
              alt="Profile"
              className="img-fluid rounded-circle shadow"
              style={{ width: "250px", height: "250px", objectFit: "cover" }}
            /> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
