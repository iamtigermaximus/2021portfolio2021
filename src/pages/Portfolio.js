import React, { useState, useEffect } from 'react'
import SocialMedia from '../components/SocialMedia'
import Fade from 'react-reveal/Fade'
import { FaGlobe, FaLaptopCode } from 'react-icons/fa'
import axios from 'axios'

const Portfolio = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios
      .get('https://backend-portfolio1925.herokuapp.com/')
      .then((response) => setProjects(response.data.items))
  }, [])
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
              {projects.reverse().map((project) => {
                return (
                  <div className='col' key={project._id}>
                    <div className='card h-100'>
                      <img
                        src={project.image}
                        className='card-image-top'
                        alt='...'
                      />
                      <div className='card-body'>
                        <h5 className='card-title text-center fw-bold'>
                          {project.title}
                        </h5>
                        <p className='card-text text-primary'>{project.tech}</p>
                        <h6 className='card-title'>The Brief</h6>
                        <p className='card-text'>{project.briefDesc}</p>
                        <h6 className='card-title'>The Result</h6>
                        <p className='card-text'>{project.resultDesc}</p>
                      </div>
                      <div className='project-links text-center p-2'>
                        <button className='btn btn-primary rounded-pill'>
                          <a
                            href={project.github}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='button-link'
                          >
                            <FaLaptopCode />
                          </a>
                        </button>
                        <button className='btn btn-primary rounded-pill'>
                          <a
                            href={project.demoLink}
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
                )
              })}
            </div>
          </div>
        </div>
      </Fade>
      <SocialMedia />
    </div>
  )
}

export default Portfolio
