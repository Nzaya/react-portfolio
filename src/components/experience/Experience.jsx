import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {/* Programming Languages */}
        <div className="experience__frontend">
          <h3>Programming Languages</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Javascript </h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>.NET (C#)</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Typescript</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Shell Scripting</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
          </div>
        </div>

        {/* Frameworks and Libraries */}
        <div className="experience__frontend">
          <h3>Frameworks and Libraries</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MEAN Stack </h4>
                <small className='text-light'>(MongoDB, Express.js, Angular, Node.js)</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MERN Stack </h4>
                <small className='text-light'>(MongoDB, Express.js, React, Node.js)</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React.js , Next.js, Angular</h4>
                <small className='text-light'>(Javascript library, React framework, Frontend framework)</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React Native</h4>
                <small className='text-light'>(Mobile app framework (for Android/IOS))</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Django , .NET Core, Express.js , Spring Boot</h4>
                <small className='text-light'>Backend framework (Python, (.NET/C#), Node.js, Java)</small>
              </div>
            </article>
          </div>
        </div>

         {/* Messaging and Queues*/}
        <div className="experience__frontend">
          <h3>Messaging and Queues</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>RabbitMQ </h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Kafka</h4>
              </div>
            </article>
          </div>
        </div>

        {/* Cloud Platform and CI/CD Tools */}
        <div className="experience__frontend">
          <h3>Cloud Platform and CI/CD Tools</h3>
          <div className="experience__content">
           <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>AWS </h4>
                <small className='text-light'>(EC2, S3, Lambda, CloudWatch)</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Github Actions , AWS CodePipeline </h4>
              </div>
            </article>
          </div>
        </div>

        {/* Database Management and Containeriation*/}
        <div className="experience__frontend">
          <h3>Database Management and Containeriation</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MongoDB </h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Docker</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Kubernetes</h4>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience