import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import { TypeAnimation } from 'react-type-animation';
import Button from 'react-bootstrap/Button';

const Hero = () => {
const [finishedTyping,setFinishedTyping]=useState(false)
  return (
  <>
    <Container   id="hero"  className="my-flex Hero flex-column">
      <Image style={{ width: '150px', height: '150px' }} src="myimage.png" />
      <Row >
        <h4>Hi, I'm Abdullah</h4>
      </Row>
      <TypeAnimation
      sequence={[
        'Skilled engineer specializing in React, Bootstrap, and Firebase. Creating high-quality, responsive web applications with clean code for exceptional user experiences. Lets build something great together!',
        ()=>{
          setFinishedTyping(true)
        },
      ]}
      wrapper="span"
      cursor={true}
      style={{ fontSize: '1.125rem', display: 'inline-block' }}
    />
<Row>
<Col>
{finishedTyping && <Button className='button1' onClick={()=>window.open('https://www.dropbox.com/s/zk0wuohgtoyd8jl/abdullah_mostafa_Resume.pdf?dl=0')} variant="primary">Download Cv</Button>}
</Col>
<Col>
{finishedTyping && <Button href='#contact'  className='button2'>Contact Me</Button>}
</Col>
</Row>
  
    </Container>
    
</>

   
  )
}

export default Hero