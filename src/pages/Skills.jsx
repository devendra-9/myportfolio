import React from 'react'
import './css/skills.css'

const Skills = () => {
  return (
    <div id='skills' className='skills'>
      <div className="skillshead">
        <div className="skillsmain"> 
          <h1>My Skills</h1>
          <div className='skilllist'>
            <div className='images'>
              <img src="/html.png" alt="" />
              <p>HTML</p>
            </div>
            <div className='images'>
              <img src="/css.png" alt="" />
              <p>CSS</p>
            </div>
            <div className='images'>
              <img src="/react.webp" alt="" />
              <p>React</p>
            </div>
            <div className='images'>
              <img src="/js.webp" alt="" />
              <p>Javascript</p>
            </div>
            <div className='images'>
              <img src="/njs.png" alt="" />
              <p>Node JS</p>
            </div>
            <div className='images'>
              <img src="/mongodb.png" alt="" />
              <p>Mongo DB</p>
            </div>
            <div className='images'>
              <img src="/es.webp" alt="" />
              <p>Express</p>
            </div>
            <div className='images'>
              <img src="/ts.png" alt="" />
              <p>TypeScript</p>
            </div>
            <div className='images'>
              <img src="/git.png" alt="" />
              <p>Git</p>
            </div>
            <div className='images'>
              <img src="/github.webp" alt="" />
              <p>Github</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills