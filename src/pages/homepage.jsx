import React from 'react'
import About from '../pages/aboutme'
import Project from '../pages/projects'
import Skills from '../pages/Skills'
import Contact from '../pages/contact'
import Navbar from '../components/navbar'

const homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <About />
      <Project />
      <Skills />
      <Contact />
    </div>
  )
}

export default homepage