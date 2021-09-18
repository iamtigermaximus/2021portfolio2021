import React from 'react'
import Image1 from '../images/portfolio-pic-about.jpg'
import SocialMedia from '../components/SocialMedia'
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
      <div className="about-page-container">
          <div className="page-heading-container text-center py-5 mb-3">
              <Fade top>
                <div className="page-heading-title">
                    <h1 className="page-title pt-4">
                        About Me
                    </h1>
                </div>
                <div className="page-heading-subtexts">
                    <h5 className="page-subtexts">
                        Find out who I am, where I'm from and what I'm all about.
                    </h5>
                </div>
                </Fade>
            </div>
            <div className="about-page-content">
                <Fade>
              <div className="container">
                  <div className="row">
                  <div className="col-md-2">
                            <div className="description  ">
                                <p></p>
                            </div>
                        </div>
                        <div className="col-md-8 py-3">
                            <div className="description align-items-center px-3">
                                <p><span className="fs-3">My name is Siegfred. I'm a self-taught  web developer based in Helsinki, Finland.</span> 
                                <br/>
                                <br/>
                                <span className="fs-6 about-content">I’ve always sought out opportunities and challenges that are meaningful to me.Although my professional path has taken many twists and turns — from being a farmer, to small business owner and entrepreneur, to a professional chef — I've never stopped engaging my passion to help others and solve problems.
                                <br/>
                                <br/>I’m naturally inquisitive and enjoy figuring out how things work. I enjoy making thoughtful, engaging, and functional web applications that have a simple, clean and distinct design.Here are some of the technologies and methodologies I am currently into: Javascript, React, HTML, CSS,Styled Components, Bootstrap, REST API,JSON,NodeJS, Visual Studio Code, Github, Git.
                                <br/>
                                <br/>When I'm not at work, I spend my time working on my personal projects and building my own products.
                                <br/>
                                <br/>When I'm not coding, I enjoy spending time with friends,traveling and exploring new cities and culture.</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="description">
                                <p></p>
                            </div>
                        </div>
                  </div>
              </div>
              <div className="container">
                <div className="row mb-5">
                <div className="col-sm-4">
                 
              </div>
              <div className="col-sm-4">
                  <div className="card">
                  <img src={Image1} className="card-img-top" alt="..."/>
              </div>
              </div>
              <div className="col-sm-4">
                  
              </div>
                </div>
              </div>
              </Fade>
              <SocialMedia/>
            </div>
      </div>
    )
}

export default About
