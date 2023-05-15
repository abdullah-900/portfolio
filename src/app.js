import React from 'react'
import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SkillGallery from './components/SkillGallery';
import ProjectGallery from './components/ProjectGallery';
import Contact from './components/Contact';
const App = () => {

  return (
  <>
    <Navigation />
    <Hero/>
    <SkillGallery />
    <ProjectGallery/>
    <Contact/>
    </>
  )
}

export default App