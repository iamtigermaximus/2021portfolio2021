import React from 'react'
import SocialMedia from '../components/SocialMedia'
import PortfolioImage from '../images/portfolioimage4.png'
import CovidAppImage from '../images/CAI-Phone.png'
import RestaurantImage from '../images/restaurantimage4.png'
import MovieSearchImage from '../images/hookedimage5.png'
import Fade from 'react-reveal/Fade';
import {FaGlobe,FaLaptopCode } from "react-icons/fa"

const Portfolio = () => {
    return (
        <div className="portfolio-page-container">
          
            <div className="page-heading-container text-center py-5 ">
            <Fade top>
                <div className="page-heading-title">
                    <h1 className="page-title pt-4">
                        My Projects
                    </h1>
                </div>
                <div className="page-heading-subtexts">
                    <h5 className="page-subtexts">
                        Check out some of my personal projects.
                    </h5>
                </div>
                </Fade>
            </div>
            
            <Fade >
            <div className="container portfolio-projects-container">
            <div className="container py-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
    <div className="card h-100">
      <img src={MovieSearchImage}className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-center fw-bold">Movie Search App- Hooked</h5>
        <p className="card-text text-primary">Technologies Used:React, React Router, Bootstrap, HTML, CSS, REST API</p>
        <h6 card-title>The Brief</h6>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum iaculis eu. Purus viverra accumsan in nisl nisi. Neque laoreet suspendisse interdum consectetur. Duis convallis convallis tellus id.
        </p>
        <h6 card-title>The Result</h6>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum iaculis eu. Purus viverra accumsan in nisl nisi. Neque laoreet suspendisse interdum consectetur. Duis convallis convallis tellus id.
        </p>
      </div>
      <div className="project-links text-center p-2">
        <button className="btn btn-primary rounded-pill"><a href="https://github.com/iamtigermaximus/hooked2021" target="_blank" rel="noopener noreferrer" className="button-link"><FaLaptopCode/></a></button>
        <button className="btn btn-primary rounded-pill"><a href="https://tigercode-hooked2021.netlify.app/" target="_blank" rel="noopener noreferrer" className="button-link"><FaGlobe/></a></button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={CovidAppImage} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-center fw-bold">Corona Tracker</h5>
        <p className="card-text text-primary">Technologies Used:React, React Router, Bootstrap, HTML, CSS, REST API</p>
        <h6 card-title>The Brief</h6>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum iaculis eu. Purus viverra accumsan in nisl nisi. Neque laoreet suspendisse interdum consectetur. Duis convallis convallis tellus id.
        </p>
        <h6 card-title>The Result</h6>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum iaculis eu. Purus viverra accumsan in nisl nisi. Neque laoreet suspendisse interdum consectetur. Duis convallis convallis tellus id.
        </p>
      </div>
      <div className="project-links text-center p-2">
        <button className="btn btn-primary rounded-pill"><a href="https://github.com/iamtigermaximus/coronatracker2021" target="_blank" rel="noopener noreferrer" className="button-link"><FaLaptopCode/></a></button>
        <button className="btn btn-primary rounded-pill"><a href="https://tigercode-coronatracker2021.netlify.app/" target="_blank"  rel="noopener noreferrer" className="button-link"><FaGlobe/></a></button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={RestaurantImage} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-center fw-bold">Restaurant Website- Moma</h5>
        <p className="card-text text-primary">Technologies Used:React, React Router, Bootstrap, HTML, CSS</p>
        <h6 card-title>The Brief</h6>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum iaculis eu. Purus viverra accumsan in nisl nisi. Neque laoreet suspendisse interdum consectetur. Duis convallis convallis tellus id.
        </p>
        <h6 card-title>The Result</h6>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum iaculis eu. Purus viverra accumsan in nisl nisi. Neque laoreet suspendisse interdum consectetur. Duis convallis convallis tellus id.
        </p>
      </div>
      <div className="project-links text-center p-2">
        <button className="btn btn-primary rounded-pill"><a href="https://github.com/iamtigermaximus/restaurant-website" target="_blank" rel="noopener noreferrer" className="button-link"><FaLaptopCode/></a></button>
        <button className="btn btn-primary rounded-pill"><a href="https://tigercode-restaurant-website.netlify.app/" target="_blank"  rel="noopener noreferrer" className="button-link"><FaGlobe/></a></button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={PortfolioImage} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-center fw-bold">Portfolio Website</h5>
        <p className="card-text text-primary">Technologies Used:React, React Router, Bootstrap, HTML, CSS</p>
        <h6 card-title>The Brief</h6>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum iaculis eu. Purus viverra accumsan in nisl nisi. Neque laoreet suspendisse interdum consectetur. Duis convallis convallis tellus id.
        </p>
        <h6 card-title>The Result</h6>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum iaculis eu. Purus viverra accumsan in nisl nisi. Neque laoreet suspendisse interdum consectetur. Duis convallis convallis tellus id.
        </p>
      </div>
      <div className="project-links text-center p-2">
        <button className="btn btn-primary rounded-pill"><a href="https://github.com/iamtigermaximus/2021portfolio2021" target="_blank" rel="noopener noreferrer" className="button-link"><FaLaptopCode/></a></button>
        <button className="btn btn-primary rounded-pill"><a href="https://tigerportfolio2021.netlify.app/" target="_blank" rel="noopener noreferrer" className="button-link"><FaGlobe/></a></button>
      </div>
    </div>
  </div>
  
  
</div>
            </div>
            </div>
            </Fade>
            <SocialMedia/>
          
          </div>
    )
}

export default Portfolio

