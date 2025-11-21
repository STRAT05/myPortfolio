// src/components/About.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ProfileImg from '../Assets/images/Profile.png'; 

function About({darkMode}) {
  return (
    <section 
            id="about" 
            className={`py-5 ${darkMode ? 'dark' : 'light'}`}>
      <Container>
        <Row className="align-items-center">
          <Col md={5} className="text-center mb-4 mb-md-0">
       
            <img
              src={ProfileImg}
              alt="About me"
              className="img-fluid rounded-circle shadow"
              style={{ width: "250px", height: "250px", objectFit: "cover" }}
            />
          </Col>
          <Col md={7}>
            <Card className="border-0 bg-transparent">
              <Card.Body>
                <h2 className={`fw-bold mb-3 ${darkMode ? "text-light" : "text-dark"}`}>About Me</h2>
                <p className={`lead ${darkMode ? "text-light" : "text-dark"}`}>
                  Hi! I'm <span className="text-primary fw-bold">Jede Isaiah Maxweil Pega</span>, an Aspiring Full-Stack Developer with a passion for creating efficient and scalable web applications. I have experience working with modern technologies like React for front-end development, Laravel for back-end services, and Docker for containerization and deployment.
                </p>
                <p className={`${darkMode ? "text-light" : "text-dark"}`}>
                  I am a student studying Computer Science, continuously learning new technologies to enhance my craft.
                </p>
               
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
