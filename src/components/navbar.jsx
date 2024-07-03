import React, { useState } from 'react'
import './css/global.css'

import { HashLink as Hash } from 'react-router-hash-link'

const navbar = () => {
  
  const [click,setclick] = useState('about')

  return (
      <div className='navbar'>
        <div className="navbar-main">
          <div className="navbar-left">
            <h1>Portfolio</h1>
          </div>
          <div className="navbar-right">
            <ul>           
                <Hash to='#about' smooth='true' style={{textDecoration:'none', fontsize:'18px',fontfamily:'Georgia',color: 'rgb(197, 192, 192)'}}><li>About</li></Hash>    
                <Hash to='#project' smooth='true' style={{textDecoration:'none', fontsize:'18px',fontfamily:'Georgia',color: 'rgb(197, 192, 192)'}}><li>Project</li></Hash>
                <Hash to='#skills' smooth='true' style={{textDecoration:'none', fontsize:'18px',fontfamily:'Georgia',color: 'rgb(197, 192, 192)'}}><li>Skills</li></Hash>
                <Hash to='#contact' smooth='true' style={{textDecoration:'none', fontsize:'18px',fontfamily:'Georgia',color: 'rgb(197, 192, 192)'}}><li>Contact</li></Hash>
            </ul>
          </div>
        </div>  
    </div>
  )
}

export default navbar