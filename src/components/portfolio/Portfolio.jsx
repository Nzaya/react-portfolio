import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/dashboard.png'
import IMG2 from '../../assets/flight.jpg'
import IMG3 from '../../assets/movie.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// INPUT MY OWN IMAGES DURING PRODUCTION

const data = [
  {
    id: 1,
    img: IMG1,
    title: 'Storage Management',
    github: 'https://github.com/Nzaya/Storage_management',
    demo: 'https://storage-management-tawny.vercel.app/sign-up'
  },

  {
    id: 2,
    img: IMG2,
    title: 'Flight Search',
    github: 'https://github.com/Nzaya/Flight-search',
    demo: 'https://flight-search-drab.vercel.app/'
  },

  {
    id: 3,
    img: IMG3,
    title: 'Movie App',
    github: 'https://github.com/Nzaya/movie_app_react',
    demo: 'https://movie-app-react-wheat.vercel.app/'
  },

  // {
  //   id: 4,
  //   img: IMG4,
  //   title: 'Time Chat App',
  //   github: 'https://github.com/Nzaya/NodeJS-Chat',
  //   demo: 'https://dribbble.com'
  // },

  // {
  //   id: 5,
  //   img: IMG5,
  //   title: 'Chart Templates and Infographics in Figma',
  //   github: 'https://github.com',
  //   demo: 'https://dribbble.com'
  // },

  // {
  //   id: 6,
  //   img: IMG6,
  //   title: 'Chart Templates and Infographics in Figma',
  //   github: 'https://github.com',
  //   demo: 'https://dribbble.com'
  // }
  
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, img, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
               <div className="portfolio__item-image">
                  <img src={img} alt={title} />
               </div>
               <h3>{title}</h3>
               <div className="portfolio__item-cta">
                  <a href={github}className='btn' target ='_blank'>Github</a>
                  <a href={demo}className='btn btn-primary' target='_blank'>Live Demo</a>
               </div> 
             </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio