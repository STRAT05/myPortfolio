// src/components/Contact.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

function Contact({darkMode}) {
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
    // Simulate successful submission
    setSubmitted(true);
  };

  return (
    <section id="contact" className={`"py-5 bg-light" ${darkMode ? 'dark' : 'light'}`}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className={`"shadow-sm border-0" ${darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`}>
              <Card.Body>
                <h2 className="fw-bold mb-4 text-center">Contact Me</h2>
                {submitted && (
                  <Alert variant="success">Thank you for your message! I'll get back to you soon.</Alert>
                )}
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Your Name"
                      required
                    />
                    <Form.Control.Feedback type="invalid">Please provide your name.</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      required
                    />
                    <Form.Control.Feedback type="invalid">Please provide a valid email address.</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="formMessage" className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      required
                      placeholder="Type your message here"
                    />
                    <Form.Control.Feedback type="invalid">Please provide a message.</Form.Control.Feedback>
                  </Form.Group>
                  <Button variant="primary" type="submit" size="lg" className="w-100">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
