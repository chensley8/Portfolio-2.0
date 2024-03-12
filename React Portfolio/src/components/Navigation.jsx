import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const getNavLinkClass = (isActive) => {
    return isActive ? 'active' : '';
  };

  return (
    <Nav className="justify-content-center" activeKey="/">
      <Nav.Item>
        <Nav.Link as={NavLink} to="/" className={({ isActive }) => getNavLinkClass(isActive)}>About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/Projects" className={({ isActive }) => getNavLinkClass(isActive)}>Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/resume" className={({ isActive }) => getNavLinkClass(isActive)}>Resume</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/Contact" className={({ isActive }) => getNavLinkClass(isActive)}>Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;