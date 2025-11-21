// src/components/Skills.js
import React from 'react';
import { Container, Row, Col, ProgressBar, Card } from 'react-bootstrap';

const skills = [
  { name: "JavaScript", level: 60 },
  { name: "React", level: 60 },
  { name: "HTML/CSS", level: 80 },
  { name: "Laravel", level: 66 },
  { name: "PHP", level: 66 },
  { name: "Docker", level: 33 },
  { name: "Git", level: 80 },
];

function Skills({darkMode}) {
  return (
    <section id="skills" className={`"py-5" ${darkMode ? 'dark' : 'light'}`}>
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Card className={`"border-0 shadow-sm"> ${darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`}>
              <Card.Body>
                <h2 className={`fw-bold mb-4 text-center ${darkMode ? "text-light" : "text-dark"}`}>My Skills</h2>
                {skills.map((skill, idx) => (
                  <div key={idx} className="mb-3">
                    <div className="d-flex justify-content-between fw-bold">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <ProgressBar
                      now={skill.level}
                      label={`${skill.level}%`}
                      animated
                      variant={
                        skill.level > 80 ? 'success' :
                        skill.level > 65 ? 'info' : 'warning'
                      }
                      style={{ height: '1.2rem' }}
                    />
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
