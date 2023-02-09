import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_adw8gwt', 'template_skk5d97', form.current, 'l7COs_4e7SPY0W3ei')

    e.target.reset()
      
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nzayangeta4149@gmail.com</h5>
            <a href="mailto:nzayangeta@outlook.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <AiFillLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Sharon Nzaya</h5>
            <a href="https://linkedin.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>0728644947</h5>
            <a href="https://api.whatsapp.com/send?phone+254728644947" target='_blank'>Send a message</a>
          </article>
        
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit = {sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'> Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact