import React from 'react'
import { useState ,useRef } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SkillGallery from './components/SkillGallery';
import ProjectGallery from './components/ProjectGallery';
import Contact from './components/Contact';
const c='contact'
const App = () => {
  const [hero,setHero]=useState()
  const [skills,setSkills]=useState()
  const [project,setProject]=useState()
const [contact,setContact]=useState()
console.log(project)
  return (
  <>
    <Navigation con={contact} pro={project} sk={skills} hr={hero} />
    
    <Hero set={setHero} />
    <SkillGallery set={setSkills} />
    <ProjectGallery set={setProject}/>
    <Contact set={setContact} />
    
    </>
  )
}

export default App