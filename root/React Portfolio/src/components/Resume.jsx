import React from 'react';
import Card from 'react-bootstrap/Card';
import resumePDF from '../assets/Basic_Resume.docx.pdf';

function Resume() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>My Resume</Card.Title>
        <iframe 
          src={resumePDF} 
          style={{ width: '95%', height: '1000px' }}
          title="My Resume"
        ></iframe>
      </Card.Body>
    </Card>
  );
}

export default Resume;