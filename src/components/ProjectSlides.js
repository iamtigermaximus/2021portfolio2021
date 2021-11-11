import React from 'react'
import ProjectImage2 from '../images/project-image2.jpg'
import {Link} from 'react-router-dom'
 
const ProjectSlides = () => {
    return (
        <div className="project-slides-container pt-3">
            <div className="container text-center p-5">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                <div className="carousel-inner project-slide-image">
                    <div className="carousel-item active ">
                        <img src={ProjectImage2}className="d-block w-100 "  alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>PROJECT 1</h5>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img src={ProjectImage2} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>PROJECT 2</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={ProjectImage2} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>PROJECT 3</h5>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <button className="btn btn-primary rounded-pill mt-3"><Link className="button-link" to="/portfolio">View all Projects</Link></button>
        </div>    
    </div>
    )
}

export default ProjectSlides
