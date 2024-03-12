import React from 'react';
import Navigation from './Navigation'; // Import your Navigation component
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
    <header>
      <Container>
      <Row xs={1} md={1} lg={1} xl={1} className="g-4"> {/* Adjust the number of columns based on the screen size */}
          <Col>
          <h1>Clayton Hensley</h1>
          <Navigation /> {/* Include the Navigation component */}
          </Col>
          
      </Row>
    </Container>
    
    </header>
  );
}

export default Header;