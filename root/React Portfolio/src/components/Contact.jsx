import React from 'react';
import './Contact.css'
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => (
  <Container>
    <Row className="justify-content-md-center">
      <Col md={6}>
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> chensley56@gmail.com</p>
        <p><strong>GitHub:</strong> <a href="https://github.com/chensley8" target="_blank" rel="noopener noreferrer">chensley8</a></p>
        <p><strong>Phone:</strong> +1-925-808-9590</p>
      </Col>
    </Row>
  </Container>
);

export default Contact;