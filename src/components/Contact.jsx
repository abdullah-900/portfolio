import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
const Contact = () => {
  let val;
const screenWidth = window.innerWidth;
if (screenWidth<=500) {
  val='1.8rem';
}else {
  val='2.2rem';
}

  return (
    <div> 
    <Container fluid id='contact' className='my-flex flex-column contact'>
    <h2>Get In Touch</h2>

       <Row>
         <Col >
         <a  href='https://www.linkedin.com/in/abdullah-mostafa-8780a6238/'>
         <BsLinkedin color='white'  size={val}/>
         </a>
         </Col>
         <Col>
         
         <a id='hello' href="https://github.com/abdullah-900">
           <BsGithub color='white'  size={val}/>
         </a>
         </Col>
       
       </Row>
     </Container>
     </div>
  )
}

export default Contact