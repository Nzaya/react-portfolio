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
            <h3>sofware Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Full-Stack Web Application Development</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Mobile Application Development</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>System Integration & API Engineering</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Cloud & DevOps Automation</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Custom Enterprise Software Solutions</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Software Prototyping & MVP Development</p>
            </li>

          </ul>
        </article>
        {/* ============== Cloud, Infrastructure ======================== */}

        <article className='service'>
          <div className="service__head">
            <h3>Cloud, Infrastructure & System Reliability</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Cloud Architecture & Deployment.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>CI/CD & Release Automation.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Containerization & Orchestration.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Monitoring, Logging & Performance Optimization.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Security & Access Management.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>System Reliability & Maintenance.</p>
            </li>
          </ul>
        </article>
        {/* ==============END CONTENT CREATION======================== */}

      </div>
    </section>
  )
}

export default Services