import React from 'react'
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import { useRef } from 'react';

const Hero = ({set}) => {
  const ref=useRef(null)
  set(ref.current)
 
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
  }, [text, delay, currentIndex]);
  return <p className='text-sm'>{displayText}</p>;
}
  return (
  
    <Container ref={ref}  fluid className='my-flex Hero flex-column' >
<Image style={{width:'150px' ,height:'150px'}}  src='myimage.png'  />
<h2>Hi, Im Abdullah</h2>
<TypingAnimation   text="skilled engineer with expertise in React, Bootstrap, CSS, and JavaScript.
         Specializes in creating high-quality, responsive web applications with clean, efficient code.
         Committed to collaboration and delivering exceptional user experiences. Let's build something great together!" delay={70} />
    </Container>



   
  )
}

export default Hero