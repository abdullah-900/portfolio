import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

const Navigation = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleLinkClick = () => {
    setShowOffcanvas(false);
    setTimeout(() => {
      const target = window.location.href.split('#')[1];
      if (target) {
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 500);
  };

  return (
    <>
    <Navbar fixed='top'  expand={'md'} >
    <Container fluid>
      <Navbar.Brand >
        <img width='200px' src='abdullah-mostafa-high-resolution-logo-white-on-transparent-background.svg'></img>
      </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'md'}`} 
             onClick={() => setShowOffcanvas(true)}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${'md'}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${'md'}`}
              placement="end"
              show={showOffcanvas} 
              onHide={()=>setShowOffcanvas(false)}
            >
                 <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href='#hero'   onClick={handleLinkClick} >Me</Nav.Link>
                <Nav.Link href='#skills' onClick={handleLinkClick}>Skills</Nav.Link>
               <Nav.Link href='#projects'onClick={handleLinkClick}>Projects</Nav.Link>
               <Nav.Link href='#contact'onClick={handleLinkClick}>Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
    </Container>
  </Navbar>
  
  </>
  )
}

export default Navigation