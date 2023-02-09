import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>UI/UX design for web and mobile.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data Visualization.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>WireFraming and Prototyping.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>User Stories.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design technology consulting.</p>
            </li>

          </ul>
        </article>
        {/* ==============END OF UI/UX======================== */}

        <article className='service'>
          <div className="service__head">
            <h3>Software Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Application Development.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Mobile Application Development.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>System Integration.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>DevOps Automation.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Custom Software Development.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Software Prototyping.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Quality Assuarance.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>IT Consulting.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Enterprise Applications.</p>
            </li>
          </ul>
        </article>
        {/* ==============WEB DEVELOPMENT======================== */}

        <article className='service'>
          <div className="service__head">
            <h3>Data Science</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Business needs analysis.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data Preparation.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Machine learning (ML) model design and development.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>ML model evaluation and tuning.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Delivering data science output in an agreed format.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data Visualization.</p>
            </li>
          </ul>
        </article>
        {/* ==============END CONTENT CREATION======================== */}

      </div>
    </section>
  )
}

export default Services