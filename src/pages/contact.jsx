import React from 'react'
import './css/contact.css'

const contact = () => {
  return (
    <div id="contact" className='contact'>
      <div className="contactmain">
        <div className="contactleft">
          <h1>Contact Me:</h1>
          <div className="maildetails">
            <h3>Send a mail on : </h3>
            <p><a href = 'http://gmail.com' target='blank'>devendrakandpal07@gmail.com</a></p>
            <h4>Lucknow, Uttar Pradesh, India</h4>
          </div>
        </div>
        <div className="contactright">
          <div className="form">
            <h1>Send mail</h1>
            <div className="formdetails">
              <div className="email">
                <label>Email:</label>
                <input type="text" placeholder='Enter your Email'/>
              </div>
              <div className="email">
                <label>Name:</label>
                <input type="text" placeholder='Enter your Namel'/>
              </div>
              <div className="email">
                <label>Subject :</label>
                <textarea type='text' placeholder='Enter description' />
              </div>
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default contact