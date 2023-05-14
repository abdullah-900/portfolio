import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Navigation = ({con,pro,sk,hr}) => {

  return (
    <Navbar fixed='top'>
    <Container  fluid>
     
      <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
      <Nav>
        <Nav.Link onClick={()=>{hr.scrollIntoView({ behavior: "smooth", block: "start" });}} >Me</Nav.Link>
        <Nav.Link onClick={()=>{sk.scrollIntoView({ behavior: "smooth", block: "start" });}} >Skills</Nav.Link>
        <Nav.Link onClick={()=>{pro.scrollIntoView({ behavior: "smooth", block: "start" });}}>Projects</Nav.Link>
        <Nav.Link onClick={()=>{con.scrollIntoView({ behavior: "smooth", block: "start" })}} >Contact</Nav.Link>
      </Nav>
      
    
    </Container>
  </Navbar>
  )
}

export default Navigation