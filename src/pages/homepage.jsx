import React from 'react'
import About from '../pages/aboutme'
import Project from '../pages/projects'
import Skills from '../pages/Skills'
import Contact from '../pages/contact'
import Navbar from '../components/navbar'
import './css/homepage.css'

const homepage = () => {
  return (
    <div className="homepage">
      <div className="navbardiv">
        <Navbar />
      </div>
      <div className="navbardetails">
        <About />
        <Project />
        <Skills />
        <Contact />
      </div>
    </div>
  )
}

export default homepage