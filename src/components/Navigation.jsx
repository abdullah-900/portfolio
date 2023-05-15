import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Navigation = () => {

  return (
    <Navbar fixed='top'>
    <Container  fluid>
     
      <Navbar.Brand >Portfolio</Navbar.Brand>
      <Nav>
        <Nav.Link href='#hero'>Me</Nav.Link>
        <Nav.Link href='#skills'>Skills</Nav.Link>
        <Nav.Link href='#projects'>Projects</Nav.Link>
        <Nav.Link href='#contact'>Contact</Nav.Link>
      </Nav>
      
    
    </Container>
  </Navbar>
  )
}

export default Navigation