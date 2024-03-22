import React from 'react'
import '../styles/contactForm.css'

const ContactForm = () => {
  return (
    <form>
      <div className="containFormm">
        <div className="formContainn">
          <div className='user'>
            <label>First Name:</label>
            <input type="text" name='firstname'/>
          </div>
          <div className='user'>
            <label>Last Name:</label>
            <input type="text" name='lastname'/>
          </div>
        </div>
        <div className="formContainTwo">
          <label>Enter Your Email:</label>
          <input type="text" name='email'/>
          <label>Enter Your Subject:</label>
          <input type="text" name='subject'/>
          <label>Enter Your Message:</label>
          <textarea name="myTextarea" rows="5" cols="20" />
        </div>
        <button className="contactButton">Send</button>
      </div>
    </form>
  );
}

export default ContactForm
