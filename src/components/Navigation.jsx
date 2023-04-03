import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
    <Navbar>
    <Container fluid>
     
      <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
      <Nav>
        <Nav.Link href="#home">Me</Nav.Link>
        <Nav.Link href="#features">Skills</Nav.Link>
        <Nav.Link href="#pricing">Projects</Nav.Link>
        <Nav.Link href="#pricing">Contact</Nav.Link>
      </Nav>
      
    
    </Container>
  </Navbar>
  )
}

export default Navigation