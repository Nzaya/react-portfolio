import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination, Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Ann Kamau',
    review: 'Sharon Nzaya demonstrates a practical and data-driven approach to problem-solving. She actively seeks different perspectives and creative solutions from her teammates and is continuously experimenting to drive results.'
  },

  {
    avatar: AVTR2,
    name: 'Daniel Kuria',
    review: 'Sharon Nzaya has been an outstanding mentor and example to our junior engineers. She is dedicated to helping our up-and-coming engineers understand our engineering environment and encourages them to be solution-oriented in everything they do.'
  },

  {
    avatar: AVTR3,
    name: 'Amos Karugo',
    review: 'Sharon Nzaya is an experienced member of the team and displays a high level of institutional knowledge. She requires a minimal amount of supervision to fulfill her job duties and maintains a good working relationship with team members cross-functionally.'
  },

  {
    avatar: AVTR4,
    name: 'Lucille Kaleha',
    review: 'Sharon Nzaya is committed to producing work that meets high standards.She frequently goes above and beyond in her efforts to ensure consistency and generate content that exceeds expectations. Sharon actively seeks feedback and uses it to enhance her work.'
  },


]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"  
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} />
          </div>
          <h5 className='client__name'>{name}</h5>
          <small className='client__review'>{review}</small>
        </SwiperSlide>
            )
          })
        }


      </Swiper>
    </section>
  )
}

export default Testimonials