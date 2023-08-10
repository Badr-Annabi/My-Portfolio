import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data = [
  {
    avatar: AVTR1,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sint quibusdam perspiciatis voluptatibus ex, ab consequatur animi, voluptatem autem adipisci quo blanditiis, nisi eaque assumenda maxime asperiores voluptates reprehenderit laudantium!'
  },
  {
    avatar: AVTR2,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sint quibusdam perspiciatis voluptatibus ex, ab consequatur animi, voluptatem autem adipisci quo blanditiis, nisi eaque assumenda maxime asperiores voluptates reprehenderit laudantium!'
  },
  {
    avatar: AVTR3,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sint quibusdam perspiciatis voluptatibus ex, ab consequatur animi, voluptatem autem adipisci quo blanditiis, nisi eaque assumenda maxime asperiores voluptates reprehenderit laudantium!'
  },
  {
    avatar: AVTR4,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sint quibusdam perspiciatis voluptatibus ex, ab consequatur animi, voluptatem autem adipisci quo blanditiis, nisi eaque assumenda maxime asperiores voluptates reprehenderit laudantium!'
  },
]


const Testimonial = () => {
  return (
    <section id='tetimonials'>
      <h5>Reviews from client</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {
          data.map(({avatar, name, review}, index) => {
            return (
                <article key={index} className='testimonial'>
                  <div className="client__avatar">
                    <img src={avatar} />
                  </div> 
                  <h5 className='client__name'>{name}</h5>
                    <small className='client__review'>{review}</small>
                </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonial