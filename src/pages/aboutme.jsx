import React, { useState } from 'react'
import './css/aboutme.css'

const aboutme = () => {

  const[active,setactive] = useState('aboutdev')

  const handlenext = (namee) =>
    {
      setactive(namee)
    }

  return (
    <div className="aboutme" id="about">
      <div className="aboutme-main">
        <div className="aboutme-left">
          <div className={`aboutdev ${active==='aboutdev'? 'bactive': ''}`}>
            <h1>Welcome !!!</h1>
            <h3>I am Devendra Kandpal</h3>
            <h4>Web Developer</h4>
            <p>Lucknow, India </p>
          </div>
          <div className={`education ${active==='education'? 'bactive' : ''}`}>
            <h1>Education : </h1>
            <h3>Bachelor in Computer Application (B.C.A)</h3>
            <h4>Amity University </h4>
            <p>Lucknow, India </p>
          </div>
          <div className="buttonss">
          <button onClick={()=>handlenext('aboutdev')}> Previous</button>
          <button onClick={()=>handlenext('education')}> Next</button>
          </div>
        </div>
        <div className="aboutme-right">
          <img src="/ds.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default aboutme