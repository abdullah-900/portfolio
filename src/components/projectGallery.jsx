import React, {useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import { BsGithub } from "react-icons/bs";
import { useMediaQuery } from 'react-responsive'
const ProjectGallery = () => {

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

 if (isMobile) {
  return(
  <Container  id='projects' className='my-flex projects flex-column'>
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
        <p>A chat application with user authentication, real-time messaging, profile customization, and emoji support, built using Next.js, React, Firebase, SCSS, and the Emojihub API.</p>

      </Card.Body>
     <Container fluid  className="d-flex cardbuttons justify-content-around">
     <Button href="https://dynamic-madeleine-302dff.netlify.app" target="_blank" variant="primary">visit</Button>
     <a href='https://github.com/abdullah-900/chat-app'>
     <BsGithub color='black'  size='2rem'/>
     </a>
     </Container>
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
        <p>FilmFinder is a React and SCSS-based movie search app that allows users to explore movies, add them to favorites, and view compact ratings and reviews.</p>
      </Card.Body>
      <Container fluid  className="d-flex cardbuttons justify-content-around">
     <Button href="https://abdullah-900.github.io/movieapp/" target="_blank" variant="primary">visit</Button>
     <a href='https://github.com/abdullah-900/movieapp'>
     <BsGithub color='black'  size='2rem'/>
     </a>
     </Container>
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
        <p>A React-based Todo app that utilizes local storage to store todos and fetches motivational quotes from an API to inspire users to complete their tasks.</p>
      </Card.Body>
      <Container fluid  className="d-flex cardbuttons justify-content-around">
     <Button href="https://enchanting-snickerdoodle-a59706.netlify.app" target="_blank" variant="primary">visit</Button>
     <a href='https://github.com/abdullah-900/Todo-List'>
     <BsGithub color='black'  size='2rem'/>
     </a>
     </Container>
    </Card>
</Row>
   </Container>
  )
 }else {
  return (
    <Container id='projects'  fluid  className='my-flex projects flex-column'>
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
        <p>A chat application with user authentication, real-time messaging, profile customization, and emoji support, built using Next.js, React, Firebase, SCSS, and the Emojihub API. </p>
      </Card.Body>
     <Container fluid  className="d-flex cardbuttons justify-content-around">
     <Button href="https://dynamic-madeleine-302dff.netlify.app" target="_blank" variant="primary">visit</Button>
     <a href='https://github.com/abdullah-900/chat-app'>
     <BsGithub color='black'  size='2rem'/>
     </a>
     </Container>
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
        <p>FilmFinder is a React and SCSS-based movie search app that allows users to explore movies, add them to favorites, and view compact ratings and reviews.</p>
      </Card.Body>
      <Container fluid  className="d-flex cardbuttons justify-content-around">
     <Button href="https://abdullah-900.github.io/movieapp/" target="_blank" variant="primary">visit</Button>
     <a href='https://github.com/abdullah-900/movieapp'>
     <BsGithub color='black'  size='2rem'/>
     </a>
     </Container>
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
        <p>A React-based Todo app that utilizes local storage to store todos and fetches motivational quotes from an API to inspire users to complete their tasks.</p>
      </Card.Body>
      <Container fluid  className="d-flex cardbuttons justify-content-around">
     <Button href="https://enchanting-snickerdoodle-a59706.netlify.app" target="_blank" variant="primary">visit</Button>
     <a href='https://github.com/abdullah-900/Todo-List'>
     <BsGithub color='black'  size='2rem'/>
     </a>
     </Container>
    </Card>
         </Col>
         </Row>
     </Container>
  )
 }
}

export default ProjectGallery