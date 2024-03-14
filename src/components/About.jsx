import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import profilePic from '../assets/profile.jpg'; 

const About = () => (
  <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
    <Col xs={12} md={4} lg={3} className="mb-3 mb-md-0"> 
      <Card style={{ 
        width: '100%', 
        backgroundColor: 'rgba(255, 255, 255, 0)',
        border: 'none', 
        boxShadow: 'none' }}> 
        <Card.Body className="p-0 d-flex justify-content-center"> 
          <Image src={profilePic} roundedCircle fluid style={{ maxWidth: '200px' }} /> 
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} md={8} lg={6}>
      <Card border="dark" style={{ 
        width: '100%', 
        backgroundColor: 'rgba(255, 255, 255, 0.6)' }}> 
        <Card.Body>
          <Card.Title>About Me</Card.Title>
          <Card.Text>Welcome! I'm a passionate and dedicated Full Stack Web Developer with a recent graduation from the UC Davis Full Stack Web Development Bootcamp. Throughout the curriculum at UC Davis, I've honed my skills in both front-end and back-end technologies including working with HTML, multiple CSS libraries, JavaScript, Node, React, Vue, Node, SQL, NoSQL, Heroku, and Render. My journey into coding is complemented by my numerous years of customer service experience where devloped outstanding communication skills. I thrive on the cutting edge of technology, always eager to learn the latest frameworks and best practices. Whether it's bringing a fresh design to life or optimizing backend processes, my goal is to deliver outstanding results that exceed expectations. Let's connect and explore how we can bring innovative ideas to the digital landscape together!</Card.Text>        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default About;