import React from 'react'
import { useState, useEffect} from "react";
import { Row,Col, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'



const Hero = () => {

function TypingAnimation({ text, delay }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === text.length) {
        clearInterval(intervalId);
      }else{
        setCurrentIndex(prevIndex => prevIndex + 1);
        setDisplayText(prevText => prevText + text[currentIndex]);
        
      }

    }, delay);

    return () => clearInterval(intervalId);
  }, [text, delay,currentIndex]);

  return <p>{displayText}</p>
}

  return (
  <>
    <Container  id="hero"  className="my-flex Hero flex-column">
      <Image style={{ width: '150px', height: '150px' }} src="myimage.png" />
      <Row>
        <h4>Hi, I'm Abdullah</h4>
      </Row>
          <TypingAnimation
            text="Skilled engineer with expertise in React, Bootstrap, CSS, and JavaScript. Specializes in creating high-quality, responsive web applications with clean, efficient code. Committed to collaboration and delivering exceptional user experiences. Let's build something great together!"
            delay={70}
          />
    </Container>
    
</>

   
  )
}

export default Hero