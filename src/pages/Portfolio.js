import React from 'react'
import SocialMedia from '../components/SocialMedia'
import ProjectImage2 from '../images/project-image2.jpg'

const Portfolio = () => {
    return (
        <div className="portfolio-page-container mt-5">
            <div className="page-heading-container text-center py-5 ">
                <div className="page-heading-title">
                    <h1 className="page-title">
                        My Projects
                    </h1>
                </div>
                <div className="page-heading-subtexts">
                    <h5 className="page-subtexts">
                        Check out some of my personal projects.
                    </h5>
                </div>
            </div>
            <div className="container-fluid fortfolio-projects-container">
                <div className="row">
                    <div className="col-md-6  text-center p-5">
                        <div className="project-column-container">
                            <div className="project-image-container d-flex justify-content-center ">
                                <img className="project-image " src={ProjectImage2} alt="..."/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6  text-center">
                        <div className="project-description-container p-5">
                            <div className="project-heading text-center">
                                <h1 className="project-title">PROJECT 1</h1>
                            </div>
                            <div className="intro-text p-5">
                                <h6 className="project-subtext text-center">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6  text-center p-5">
                        <div className="project-column-container">
                            <div className="project-image-container d-flex justify-content-center ">
                                <img className="project-image " src={ProjectImage2} alt="..."/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6  text-center">
                        <div className="project-description-container p-5">
                            <div className="project-heading text-center">
                                <h1 className="project-title">PROJECT 2</h1>
                            </div>
                            <div className="intro-text p-5">
                                <h6 className="project-subtext text-center">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6  text-center p-5">
                        <div className="project-column-container">
                            <div className="project-image-container d-flex justify-content-center ">
                                <img className="project-image " src={ProjectImage2} alt="..."/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6  text-center ">
                        <div className="project-description-container p-5">
                            <div className="project-heading text-center">
                                <h1 className="project-title">PROJECT 3</h1>
                            </div>
                            <div className="intro-text p-5">
                                <h6 className="project-subtext text-center">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6  text-center p-5">
                        <div className="project-column-container">
                            <div className="project-image-container d-flex justify-content-center ">
                                <img className="project-image " src={ProjectImage2} alt="..."/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6  text-center">
                        <div className="project-description-container p-5">
                            <div className="project-heading text-center">
                                <h1 className="project-title">PROJECT 4</h1>
                            </div>
                            <div className="intro-text p-5">
                                <h6 className="project-subtext text-center">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </h6>
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

