import React from 'react'
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Container from 'react-bootstrap/Container';
import SkillGallery from './components/SkillGallery';
import projectGallery from './components/projectGallery';
import Contact from './components/Contact';
const App = () => {
  return (
  <>
    <Navigation/>
    <Hero />
    <SkillGallery/>
    </>
  )
}

export default App