import React, { useRef,useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import { useMediaQuery } from 'react-responsive'
const ProjectGallery = ({set}) => {

  const [show, setShow] = useState(false);
  const [secModal,setSecModal]=useState(false)
  const [thirdModal,setThirdModal]=useState(false)

  const handleClose = () => {
    setShow(false)
    setSecModal(false)
    setThirdModal(false)
  }
  
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const [indexs, setIndexs] = useState(0);

  const handleIndexs = (selectedIndex, e) => {
    setIndexs(selectedIndex);
  };
  const [indext, setIndext] = useState(0);

  const handleIndext = (selectedIndex, e) => {
    setIndext(selectedIndex);
  };
  const isMobile = useMediaQuery({ query: '(max-width: 450px)' })
 const ref=useRef(null)
 set(ref.current)
 if (isMobile) {
  return(
  <Container  fluid ref={ref} className='my-flex projects flex-column'>
  <h2>My Projects</h2>
<Row>
<Card>
<Carousel style={{cursor:'pointer'}} interval={null} activeIndex={index} onSelect={handleSelect}  variant="dark" slide={false} >
      <Carousel.Item onClick={()=>setShow(true)}>
        <img
          className="d-block w-100"
          src="chatDesktop.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item onClick={()=>setShow(true)}>
        <img
          className="d-block w-100"
          src="chatDesktop2.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item onClick={()=>setShow(true)}>
        <img
          className="d-block w-100"
          src="chatDektop5.png"
          alt="Third slide"
    
        />
      </Carousel.Item>
      <Carousel.Item onClick={()=>setShow(true)}>
        <img
          className="d-block w-100"
          src="chatDesktop3.png"
          alt="Fourth slide"
       
        />
      </Carousel.Item>
    </Carousel>
    <Modal show={show}   onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <Carousel  interval={null} activeIndex={index} onSelect={handleSelect}  variant="dark" slide={false} >
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="chatDesktopz.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="chatDesktop2z.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="chatDektop5z.png"
          alt="third slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="chatDesktop3z.png"
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
        </Modal.Body>
      </Modal>
      <Card.Body>
        <Card.Title>Chat App</Card.Title>
    
        <Button href="https://dynamic-madeleine-302dff.netlify.app/Login" target="_blank" variant="primary">visit</Button>
      </Card.Body>
    </Card>
    
</Row>
<Row>
<Card >
<Carousel style={{cursor:'pointer'}} interval={null} activeIndex={indexs} onSelect={handleIndexs}  variant="dark" slide={false} >
      <Carousel.Item onClick={()=>setSecModal(true)}>
        <img
          className="d-block w-100"
          src="movieapp desktop.png"
          alt="First slide"
         
        />
      </Carousel.Item>
      <Carousel.Item onClick={()=>setSecModal(true)}>
        <img
          className="d-block w-100"
          src="movieapp2.png"
          alt="Second slide"
  
        />
      </Carousel.Item>
      <Carousel.Item onClick={()=>setSecModal(true)}>
        <img
          className="d-block w-100"
          src="movieapp3.png"
          alt="Third slide"

        />
      </Carousel.Item>
  
    </Carousel>
    <Modal size='xl'  show={secModal}  onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <Carousel interval={null} activeIndex={indexs} onSelect={handleIndexs}  variant="dark" slide={false} >
        <Carousel.Item >
        <img
          className="d-block w-100"
          src="movieapp desktop.png"
          alt="First slide"
         
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="movieapp2.png"
          alt="Second slide"
  
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="movieapp3.png"
          alt="Third slide"

        />
      </Carousel.Item>
    </Carousel>
        </Modal.Body>
      </Modal>
      <Card.Body>
        <Card.Title>Movie App</Card.Title>
    
        <Button href="https://abdullah-900.github.io/movieapp/" target="_blank" variant="primary">visit</Button>
      </Card.Body>
    </Card>
</Row>
<Row>
<Card >
<Carousel style={{cursor:'pointer'}} interval={null} activeIndex={indext} onSelect={handleIndext}  variant="dark" slide={false} >
      <Carousel.Item onClick={()=>setThirdModal(true)}>
        <img
          className="d-block w-100"
          src="tododesktop.png"
          alt="First slide"
        
        />
      </Carousel.Item>
      <Carousel.Item onClick={()=>setThirdModal(true)}>
        <img
          className="d-block w-100"
          src="tododesktop2.png"
          alt="Second slide"
        
        />
      </Carousel.Item>
    </Carousel>
    <Modal size='xl'  show={thirdModal}  onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <Carousel interval={null} activeIndex={indext} onSelect={handleIndext}  variant="dark" slide={false} >
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="tododesktopz.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="tododesktop2z.png"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
        </Modal.Body>
      </Modal>
      <Card.Body>
        <Card.Title>Todo List</Card.Title>
        <Button href="https://enchanting-snickerdoodle-a59706.netlify.app/" target="_blank" variant="primary">visit</Button>
      </Card.Body>
    </Card>
</Row>
   </Container>
  )
 }else {
  return (
    <Container fluid ref={ref} className='my-flex projects flex-column'>
    <h2>My Projects</h2>
    <Row>
        <Col>
        <Card >
<Carousel  style={{cursor:'pointer'}} interval={null} activeIndex={index} onSelect={handleSelect}  variant="dark" slide={false} >
      <Carousel.Item onClick={()=>setShow(true)}>
        <img
          className="d-block w-100"
          src="chatDesktop.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item onClick={()=>setShow(true)}>
        <img
          className="d-block w-100"
          src="chatDesktop2.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item onClick={()=>setShow(true)}>
        <img
          className="d-block w-100"
          src="chatDektop5.png"
          alt="Third slide"
       
        />
      </Carousel.Item>
      <Carousel.Item onClick={()=>setShow(true)}>
        <img
          className="d-block w-100"
          src="chatDesktop3.png"
          alt="Fourth slide"
        
        />
      </Carousel.Item>
    </Carousel>
    <Modal size='xl'  show={show}  onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <Carousel interval={null} activeIndex={index} onSelect={handleSelect}  variant="dark" slide={false} >
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="chatDesktop.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="chatDesktop2.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="chatDektop5.png"
          alt="Third slide"
       
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="chatDesktop3.png"
          alt="Third slide"
       
        />
      </Carousel.Item>
    </Carousel>
        </Modal.Body>
      </Modal>
      <Card.Body>
        <Card.Title>Chat App</Card.Title>
        <Button href="https://dynamic-madeleine-302dff.netlify.app/Login" target="_blank" variant="primary">visit</Button>
      </Card.Body>
    </Card>
         </Col>
         <Col>
        <Card >
<Carousel style={{cursor:'pointer'}} interval={null} activeIndex={indexs} onSelect={handleIndexs}  variant="dark" slide={false} >
      <Carousel.Item onClick={()=>setSecModal(true)}>
        <img
          className="d-block w-100"
          src="movieapp desktop.png"
          alt="First slide"
         
        />
      </Carousel.Item>
      <Carousel.Item onClick={()=>setSecModal(true)}>
        <img
          className="d-block w-100"
          src="movieapp2.png"
          alt="Second slide"
  
        />
      </Carousel.Item>
      <Carousel.Item onClick={()=>setSecModal(true)}>
        <img
          className="d-block w-100"
          src="movieapp3.png"
          alt="Third slide"

        />
      </Carousel.Item>
  
    </Carousel>
    <Modal size='xl'  show={secModal}  onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <Carousel interval={null} activeIndex={indexs} onSelect={handleIndexs}  variant="dark" slide={false} >
        <Carousel.Item >
        <img
          className="d-block w-100"
          src="movieapp desktop.png"
          alt="First slide"
         
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="movieapp2.png"
          alt="Second slide"
  
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="movieapp3.png"
          alt="Third slide"

        />
      </Carousel.Item>
    </Carousel>
        </Modal.Body>
      </Modal>
      <Card.Body>
        <Card.Title>Movie App</Card.Title>
    
        <Button href="https://abdullah-900.github.io/movieapp/" target="_blank" variant="primary">visit</Button>
      </Card.Body>
    </Card>
         </Col>
         <Col>
        <Card >
<Carousel style={{cursor:'pointer'}} interval={null} activeIndex={indext} onSelect={handleIndext}  variant="dark" slide={false} >
      <Carousel.Item onClick={()=>setThirdModal(true)}>
        <img
          className="d-block w-100"
          src="tododesktop.png"
          alt="First slide"
        
        />
      </Carousel.Item>
      <Carousel.Item onClick={()=>setThirdModal(true)}>
        <img
          className="d-block w-100"
          src="tododesktop2.png"
          alt="Second slide"
        
        />
      </Carousel.Item>
    </Carousel>
    <Modal size='xl'  show={thirdModal}  onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <Carousel interval={null} activeIndex={indext} onSelect={handleIndext}  variant="dark" slide={false} >
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="tododesktop.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="tododesktop2.png"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
        </Modal.Body>
      </Modal>
      <Card.Body>
        <Card.Title>Todo List</Card.Title>
        <Button href="https://enchanting-snickerdoodle-a59706.netlify.app/" target="_blank" variant="primary">visit</Button>
      </Card.Body>
    </Card>
         </Col>
         </Row>
     </Container>
  )
 }
}

export default ProjectGallery