import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import ProfileImg from '../Assets/images/Profile.png';
import taskflow from '../Assets/images/taskflow.png';

const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio Website created with React and Bootstrap.",
    image: ProfileImg,
    link: "https://github.com/STRAT05/myPortfolio",
  },
  {
    title: "Task Flow App",
    description: "A simple task management application built with React and Bootstrap.",
    image: taskflow,
    link: "https://taskflowapp-nine.vercel.app/",
  },
];

function Projects({ darkMode }) {
  return (
    <section id="projects" className={`py-5 ${darkMode ? 'dark' : 'light'}`}>
      <Container>
        <h2 className="fw-bold mb-4 text-center">My Projects</h2>
        <Row xs={1} md={3} className="g-4 justify-content-center align-items-stretch">
          {projects.map((project, idx) => (
            <Col key={idx}>
              <Card className={`h-100 shadow-sm border-0 ${darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`}>
                <Card.Img variant="top" src={project.image} alt={`${project.title} screenshot`} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-center">
                  <Button
                    variant="primary"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See Project
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
