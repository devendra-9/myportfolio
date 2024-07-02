import React from 'react'

import { HashLink as Hash } from 'react-router-hash-link'

const navbar = () => {
  return (
    <div className='Navbar'>
      <div className="navbar-main">
        <div className="left">
          <h1>Portfolio</h1>
        </div>
        <div className="rightmenu">
          <Hash to='#about' smooth='true'>About</Hash>
          <Hash to='#project' smooth='true'>Project</Hash>
          <Hash to='#skills' smooth='true'>Skills</Hash>
          <Hash to='#contact' smooth='true'>Contact</Hash>
        </div>
      </div>  
    </div>
  )
}

export default navbar