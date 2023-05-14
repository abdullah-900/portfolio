import React, { useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
const Contact = ({set}) => {
  let val;
const screenWidth = window.innerWidth;
if (screenWidth<=500) {
  val=35;
}else {
  val=50;
}
const ref=useRef(null)
set(ref.current)
  return (
    <div> 
    <Container fluid ref={ref}   className='my-flex flex-column contact'>
    <h2>Get In Touch</h2>

       <Row>
         <Col >
         <a  href='https://www.linkedin.com/in/abdullah-mostafa-8780a6238/'>
         <BsLinkedin  size={val}/>
         </a>
         </Col>
         <Col>
         
         <a id='hello' href="https://github.com/abdullah-900">
           <BsGithub size={val}/>
         </a>
         </Col>
       
       </Row>
     </Container>
     </div>
  )
}

export default Contact