import React, { useRef } from 'react'

 import { Container, Row, Col, Image } from 'react-bootstrap';
const SkillGallery = ({set}) => {
const ref=useRef(null)
set(ref.current)
  return (
    <Container ref={ref} fluid  className='my-flex flex-column Skills'>
   <h2>My Skills</h2>
      <Row>
        <Col>
          <Image width={128} height={128} src="React.svg" fluid />
        </Col>
        <Col >
          <Image width={128} height={128} src="CSS.svg" fluid />
        </Col>
        <Col  >
          <Image width={128} height={128} src="JS.svg" fluid />
        </Col>
        <Col  >
          <Image width={128} height={128} src="Bootstrap.svg" fluid />
        </Col>
        <Col>
          <Image width={128} height={128} src="HTML.svg" fluid />
        </Col>
        <Col>
          <Image width={128} height={128} src="FireBase.svg" fluid />
        </Col>
      </Row>
    </Container>


  )
}

export default SkillGallery