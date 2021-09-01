import React from 'react'
import {Link} from 'react-router-dom'
import SocialMedia from '../components/SocialMedia'
import ProjectImage2 from '../images/project-image2.jpg'

const Portfolio = () => {
    return (
        <div className="portfolio-page-container">
            <div className="page-heading-container text-center py-5 ">
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
            </div>
            <div className="container portfolio-projects-container">
            <div className="container py-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src={ProjectImage2}className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Project Title</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum iaculis eu. Purus viverra accumsan in nisl nisi. Neque laoreet suspendisse interdum consectetur. Duis convallis convallis tellus id.</p>
      </div>
      <button className="btn btn-primary rounded-pill mb-2"><Link className="button-link">View Project</Link></button>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={ProjectImage2} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Project Title</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum iaculis eu. Purus viverra accumsan in nisl nisi. Neque laoreet suspendisse interdum consectetur. Duis convallis convallis tellus id.</p>
      </div>
      <button className="btn btn-primary rounded-pill mb-2"><Link className="button-link">View Project</Link></button>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={ProjectImage2} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Project Title</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum iaculis eu. Purus viverra accumsan in nisl nisi. Neque laoreet suspendisse interdum consectetur. Duis convallis convallis tellus id.</p>
      </div>
      <button className="btn btn-primary rounded-pill mb-2"><Link className="button-link">View Project</Link></button>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={ProjectImage2} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Project Title</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum iaculis eu. Purus viverra accumsan in nisl nisi. Neque laoreet suspendisse interdum consectetur. Duis convallis convallis tellus id.</p>
      </div>
      <button className="btn btn-primary rounded-pill mb-2"><Link className="button-link">View Project</Link></button>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={ProjectImage2} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Project Title</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum iaculis eu. Purus viverra accumsan in nisl nisi. Neque laoreet suspendisse interdum consectetur. Duis convallis convallis tellus id.</p>
      </div>
      <button className="btn btn-primary rounded-pill mb-2"><Link className="button-link">View Project</Link></button>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={ProjectImage2} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Project Title</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum iaculis eu. Purus viverra accumsan in nisl nisi. Neque laoreet suspendisse interdum consectetur. Duis convallis convallis tellus id.</p>
      </div>
      <button className="btn btn-primary rounded-pill mb-2"><Link className="button-link">View Project</Link></button>
    </div>
  </div>
</div>
            </div>
            </div>
            <SocialMedia/>
          </div>
    )
}

export default Portfolio

