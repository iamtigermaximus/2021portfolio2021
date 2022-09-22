import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import MovieSearchImage from '../images/hookedimage5.png'
import PortfolioImage from '../images/portfolioimage4.png'
import CovidAppImage from '../images/CAI-Phone.png'
import RestaurantImage from '../images/restaurantimage4.png'
import StarShopImage from '../images/starshop-image4.png'
import Bike1 from '../images/Bike-f1.png'

import { Link } from 'react-router-dom'

const Slides = () => {
  return (
    <div className='carousel-slides-container'>
      <div className='carousel-wrapper mx-auto'>
        <Carousel
          infiniteLoop
          useKeyboardArrows
          autoPlay
          showThumbs={false}
          showStatus={false}
        >
          <div className='text-center'>
            <img src={Bike1} alt='project' />
          </div>
          <div className='text-center'>
            <img src={StarShopImage} alt='project' />
          </div>
          <div className='text-center'>
            <img src={MovieSearchImage} alt='project' />
          </div>
          <div className='text-center'>
            <img src={RestaurantImage} alt='project' />
          </div>
          <div className='text-center'>
            <img src={CovidAppImage} alt='project' />
          </div>
          <div className='text-center'>
            <img src={PortfolioImage} alt='project' />
          </div>
        </Carousel>
      </div>
      <div className='text-center'>
        <button className='btn btn-primary rounded-pill mt-3 justify-content-center'>
          <Link className='button-link' to='/portfolio'>
            View all Projects
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Slides
