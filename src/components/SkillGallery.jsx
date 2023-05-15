import React from 'react'

 import { Container, Row, Col, Image } from 'react-bootstrap';
const SkillGallery = () => {

  return (
    <Container id='skills'  fluid  className='my-flex flex-column Skills'>
   <h2>My Skills</h2>
      <Row>
        <Col>
          <Image width={128} height={128} src="React.svg" fluid />
        </Col>
        <Col className='next'>
          <Image width={128} height={128} src="nextjs.svg" fluid />
        </Col>
        <Col  >
          <Image width={128} height={128} src="JS.svg" fluid />
        </Col>
        <Col>
          <Image width={128} height={128} src="HTML.svg" fluid />
        </Col>
        <Col>
          <Image width={128} height={128} src="CSS.svg" fluid />
        </Col>
     
        <Col className='boot' >
          <Image width={128} height={128} src="Bootstrap.svg" fluid />
        </Col>
   
        <Col>
          <Image width={128} height={128} src="FireBase.svg" fluid />
        </Col>
        <Col>
          <Image width={128} height={128} src="git.svg" fluid />
        </Col>
        
      </Row>
    </Container>


  )
}

export default SkillGallery