import React, { useRef, useEffect, useState } from 'react';
import './contact.css';

import { MdOutlineEmail } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';

import emailjs from 'emailjs-com';

const Contact = ({ prefillMessage }) => {

  const form = useRef();

  const [message, setMessage] = useState('');

  // Update message when Request CV is clicked
  useEffect(() => {
    if (prefillMessage) {
      console.log('Prefilling message...');
      setMessage(prefillMessage);
    } else {
      setMessage('');
    }
  }, [prefillMessage]);

  const sendEmail = (e) => {
    e.preventDefault();

    console.log('Form submitted');

    console.log('Form data:', {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
    });

    emailjs
      .sendForm(
      'service_2bsyz9v', //service_ID
      'template_3jw0ydp', // template_ID
      form.current,
      'hJCQ6jSkN5Y2GEjsP' // public key
    )
      .then(
        (result) => {
          console.log('Email sent:', result.text);

          alert('Message sent successfully!');

          e.target.reset();
          setMessage('');
        },
        (error) => {
          console.error('Email failed:', error.text);

          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section id="contact">

      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">

        {/* Contact Options */}
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>nzayangeta@outlook.com</h5>
          </article>

          <article className="contact__option">
            <AiFillLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Sharon Nzaya</h5>
          </article>

        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail}>

          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
};

export default Contact;