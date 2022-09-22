import React from 'react'
import SocialMedia from '../components/SocialMedia'
import PortfolioImage from '../images/portfolioimage4.png'
import CovidAppImage from '../images/CAI-Phone.png'
import RestaurantImage from '../images/restaurantimage4.png'
import MovieSearchImage from '../images/hookedimage5.png'
import StarShopImage from '../images/starshop-image4.png'
import GrabEatImage from '../images/grab-eat-image1.png'
import Bike1 from '../images/Bike-f1.png'
import Fade from 'react-reveal/Fade'
import { FaGlobe, FaLaptopCode } from 'react-icons/fa'

const Portfolio = () => {
  return (
    <div className='portfolio-page-container'>
      <div className='page-heading-container text-center py-5 '>
        <Fade top>
          <div className='page-heading-title'>
            <h1 className='page-title pt-4'>My Projects</h1>
          </div>
          <div className='page-heading-subtexts'>
            <h5 className='page-subtexts'>
              Check out some of my personal projects.
            </h5>
          </div>
        </Fade>
      </div>
      <Fade>
        <div className='container portfolio-projects-container'>
          <div className='container py-5'>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
              <div className='col'>
                <div className='card h-100'>
                  <img src={Bike1} className='card-img-top' alt='...' />
                  <div className='card-body'>
                    <h5 className='card-title text-center fw-bold'>
                      Bike Finland
                    </h5>
                    <p className='card-text text-primary'>
                      Technologies Used: NextJS,Typescript,React,
                      React,Styled-Components, HTML, CSS,MongoDB, NodeJS
                    </p>
                    <h6 card-title>The Brief</h6>
                    <p className='card-text'>
                      Bike Finland is an application that helps the user in
                      locating Bike stations in Helsinki and Espoo. The user can
                      filter and search for the nearest stations.
                    </p>
                    <h6 card-title>The Result</h6>
                    <p className='card-text'>
                      Bike Finland is a full stack application that lets you do
                      basic search of a particular station.It returns basic
                      information and overview of the station and its location
                      in the map.It also has a login, signup and logout
                      features.
                    </p>
                  </div>
                  <div className='project-links text-center p-2'>
                    <button className='btn btn-primary rounded-pill'>
                      <a
                        href='https://github.com/iamtigermaximus/bike_finland'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='button-link'
                      >
                        <FaLaptopCode />
                      </a>
                    </button>
                    <button className='btn btn-primary rounded-pill'>
                      <a
                        href='https://bike-finland.vercel.app/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='button-link'
                      >
                        <FaGlobe />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='card h-100'>
                  <img src={GrabEatImage} className='card-img-top' alt='...' />
                  <div className='card-body'>
                    <h5 className='card-title text-center fw-bold'>
                      Grab Eat- A Food Delivery App
                    </h5>
                    <p className='card-text text-primary'>
                      Technologies Used:React, React Router, Bootstrap, HTML,
                      CSS
                    </p>
                    <h6 card-title>The Brief</h6>
                    <p className='card-text'>ONGOING PERSONAL PROJECT...</p>
                    <h6 card-title>The Result</h6>
                    <p className='card-text'>
                      ONGOING PERSONAL PROJECT... Check the progress on the
                      link.
                    </p>
                  </div>
                  <div className='project-links text-center p-2'>
                    <button className='btn btn-primary rounded-pill'>
                      <a
                        href='https://github.com/iamtigermaximus/grab-eat-food-delivery'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='button-link'
                      >
                        <FaLaptopCode />
                      </a>
                    </button>
                    <button className='btn btn-primary rounded-pill'>
                      <a
                        href='https://grab-eat-food-delivery.netlify.app/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='button-link'
                      >
                        <FaGlobe />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='card h-100'>
                  <img src={StarShopImage} className='card-img-top' alt='...' />
                  <div className='card-body'>
                    <h5 className='card-title text-center fw-bold'>
                      StarShop- E-Commerce Website
                    </h5>
                    <p className='card-text text-primary'>
                      Technologies Used:React, React Router,
                      Bootstrap,Json-Server, HTML, CSS
                    </p>
                    <h6 card-title>The Brief</h6>
                    <p className='card-text'>
                      Online commerce offers a plethora of benefits, from
                      selling everywhere to personalized experiences that drive
                      loyalty.
                    </p>
                    <h6 card-title>The Result</h6>
                    <p className='card-text'>
                      StarShop was inspired by the leading online fashion store
                      in Europe.The website is responsive and can be viewed in
                      different devices.
                    </p>
                  </div>
                  <div className='project-links text-center p-2'>
                    <button className='btn btn-primary rounded-pill'>
                      <a
                        href='https://github.com/iamtigermaximus/e-commerce-website-react'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='button-link'
                      >
                        <FaLaptopCode />
                      </a>
                    </button>
                    <button className='btn btn-primary rounded-pill'>
                      <a
                        href='https://starshop-ecommerce-website.netlify.app'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='button-link'
                      >
                        <FaGlobe />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='card h-100'>
                  <img
                    src={MovieSearchImage}
                    className='card-img-top'
                    alt='...'
                  />
                  <div className='card-body'>
                    <h5 className='card-title text-center fw-bold'>
                      Movie Search App- Hooked
                    </h5>
                    <p className='card-text text-primary'>
                      Technologies Used:React, React Router, Bootstrap, HTML,
                      CSS, REST API
                    </p>
                    <h6 card-title>The Brief</h6>
                    <p className='card-text'>
                      The Covid-19 pandemic has changed the way we live.People
                      tries to think of different ways to make the time they
                      spend at home as enjoyable as possible.More time at home
                      means more time for streaming movies and watching TV.
                    </p>
                    <h6 card-title>The Result</h6>
                    <p className='card-text'>
                      Hooked is a movie search app that lets you do basic search
                      of a particular movie.It returns basic information and
                      overview of the movie.It also provides an updated list of
                      trending movie recommendation.Hooked is responsive and can
                      be viewed in different devices.
                    </p>
                  </div>
                  <div className='project-links text-center p-2'>
                    <button className='btn btn-primary rounded-pill'>
                      <a
                        href='https://github.com/iamtigermaximus/hooked2021'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='button-link'
                      >
                        <FaLaptopCode />
                      </a>
                    </button>
                    <button className='btn btn-primary rounded-pill'>
                      <a
                        href='https://tigercode-hooked2021.netlify.app/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='button-link'
                      >
                        <FaGlobe />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='card h-100'>
                  <img src={CovidAppImage} className='card-img-top' alt='...' />
                  <div className='card-body'>
                    <h5 className='card-title text-center fw-bold'>
                      Corona Tracker
                    </h5>
                    <p className='card-text text-primary'>
                      Technologies Used:React, React Router, Bootstrap, HTML,
                      CSS, REST API
                    </p>
                    <h6 card-title>The Brief</h6>
                    <p className='card-text'>
                      Covid Tracker apps are everywhere, but my biggest issue
                      with them all is how bloated they all are. Social login,
                      user tracking, email notifications. The list goes on. I
                      wanted something really simple but shows the important
                      data needed by the user.
                    </p>
                    <h6 card-title>The Result</h6>
                    <p className='card-text'>
                      Corona Tracker is a prevalence app that provides
                      up-to-date cases of Covid-19 around the world.It provides
                      a dashboard that returns number of cases, deaths and
                      recovered.The app also can give information about a
                      country's status as well as travel advisories.Corona
                      Tracker is responsive and can be viewed in different
                      devices.
                    </p>
                  </div>
                  <div className='project-links text-center p-2'>
                    <button className='btn btn-primary rounded-pill'>
                      <a
                        href='https://github.com/iamtigermaximus/coronatracker2021'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='button-link'
                      >
                        <FaLaptopCode />
                      </a>
                    </button>
                    <button className='btn btn-primary rounded-pill'>
                      <a
                        href='https://tigercode-coronatracker2021.netlify.app/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='button-link'
                      >
                        <FaGlobe />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='card h-100'>
                  <img
                    src={RestaurantImage}
                    className='card-img-top'
                    alt='...'
                  />
                  <div className='card-body'>
                    <h5 className='card-title text-center fw-bold'>
                      Restaurant Website- Moma
                    </h5>
                    <p className='card-text text-primary'>
                      Technologies Used:React, React Router, Bootstrap, HTML,
                      CSS
                    </p>
                    <h6 card-title>The Brief</h6>
                    <p className='card-text'>
                      A website gives a restaurant business a platform to
                      provide the basic information the customers may need to
                      know.It gives potential customers a feel for your
                      restaurant, menu and atmosphere.
                    </p>
                    <h6 card-title>The Result</h6>
                    <p className='card-text'>
                      Moma provides basic information about the restaurant's
                      menu,the kind of service, how to book and reserve a table,
                      contact information and a blog page.Moma is responsive and
                      can be viewed in different devices.
                    </p>
                  </div>
                  <div className='project-links text-center p-2'>
                    <button className='btn btn-primary rounded-pill'>
                      <a
                        href='https://github.com/iamtigermaximus/restaurant-website'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='button-link'
                      >
                        <FaLaptopCode />
                      </a>
                    </button>
                    <button className='btn btn-primary rounded-pill'>
                      <a
                        href='https://tigercode-restaurant-website.netlify.app/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='button-link'
                      >
                        <FaGlobe />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='card h-100'>
                  <img
                    src={PortfolioImage}
                    className='card-img-top'
                    alt='...'
                  />
                  <div className='card-body'>
                    <h5 className='card-title text-center fw-bold'>
                      Portfolio Website
                    </h5>
                    <p className='card-text text-primary'>
                      Technologies Used:React, React Router, Bootstrap, HTML,
                      CSS
                    </p>
                    <h6 card-title>The Brief</h6>
                    <p className='card-text'>
                      There are certain careers where portfolios prove more
                      helpful than just resume in showcasing your skills and
                      experience.As a self-taught developer, I believe that
                      portfolio websites will help employers assess whether the
                      skills and knowledge of a potential employee fits their
                      needs.
                    </p>
                    <h6 card-title>The Result</h6>
                    <p className='card-text'>
                      I built a portfolio website to showcase a collection of my
                      personal projects.It also provides basic information about
                      myself, contact details and links to project websites.The
                      portfolio website is responsive and can be viewed in
                      different devices.
                    </p>
                  </div>
                  <div className='project-links text-center p-2'>
                    <button className='btn btn-primary rounded-pill'>
                      <a
                        href='https://github.com/iamtigermaximus/2021portfolio2021'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='button-link'
                      >
                        <FaLaptopCode />
                      </a>
                    </button>
                    <button className='btn btn-primary rounded-pill'>
                      <a
                        href='https://tigerportfolio2021.netlify.app/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='button-link'
                      >
                        <FaGlobe />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <SocialMedia />
    </div>
  )
}

export default Portfolio
