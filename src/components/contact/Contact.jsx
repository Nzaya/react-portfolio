import React, { useRef, useEffect, useState } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('Contact component mounted');

    const fromRequestCV = localStorage.getItem('fromRequestCV');
    const savedMessage = localStorage.getItem('prefillMessage');

    console.log('localStorage values:', {
      fromRequestCV,
      savedMessage
    });

    if (fromRequestCV === 'true' && savedMessage) {
      console.log('Prefilling message');

      setMessage(savedMessage);

      localStorage.removeItem('fromRequestCV');
      localStorage.removeItem('prefillMessage');

      console.log('localStorage cleaned');
    } else {
      console.log('Not coming from Request CV');

      setMessage('');
    }
  }, []);

  useEffect(() => {
    console.log('Message state:', message);
  }, [message]);

  const sendEmail = (e) => {
    e.preventDefault();

    console.log('Submitting message:', message);

    emailjs.sendForm(
      'service_adw8gwt',
      'template_skk5d97',
      form.current,
      'l7COs_4e7SPY0W3ei'
    );

    e.target.reset();
    setMessage('');
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>

        <div className='contact__options'>

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>nzayangeta@outlook.com</h5>
          </article>

          <article className='contact__option'>
            <AiFillLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Sharon Nzaya</h5>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>

          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />

          <input
            type='email'
            name='email'
            placeholder='Your Email'
            required
          />

          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
            required
            value={message}
            onChange={(e) => {
              console.log('Typing:', e.target.value);
              setMessage(e.target.value);
            }}
          ></textarea>

          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
};

export default Contact;