import React from 'react'
import Image1 from '../images/portfoliopic.png'
import Fade from 'react-reveal/Fade'
import Particles from 'react-particles-js'

const Banner = () => {
  return (
    <div className='banner-page-container p-5 '>
      <Particles
        style={{ position: 'absolute' }}
        params={{
          particles: {
            number: {
              ' value': 500,
              density: {
                enable: true,
                value_area: 500,
              },
            },
            line_linked: {
              enable: true,
              opacity: 0.5,
            },
            move: {
              direction: 'top',
              speed: 0.5,
            },
            size: {
              value: 3,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 4,
                opacity_min: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
            },
            modes: {
              repulse: {
                particles_nb: 1,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <div className='container-fluid p-3'>
        <div className='row no-gutters'>
          <div className='col-md-6 my-3 text-center'>
            <div className='profile-column-container'>
              <div className='profile-image-container d-flex justify-content-center '>
                <img
                  className='profile-image rounded-circle '
                  src={Image1}
                  alt='...'
                />
              </div>
            </div>
          </div>
          <div className='col-md-6 my-3  d-flex justify-content-center'>
            <div className='greeting-column-container '>
              <div className='greeting-heading text-left'>
                <Fade top>
                  <h4 className='greeting pt-3'>Hey there!</h4>
                  <h1>I'm Siegfred.</h1>
                </Fade>
              </div>
              <div className='intro-text text-left'>
                <Fade right>
                  <h2 className='greeting-subtext'>
                    A frontend developer from the Philippines living in
                    Helsinki. I create meaningful websites and projects to help
                    people go further online.
                  </h2>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
