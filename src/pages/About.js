import React from 'react'
import Image1 from '../images/TechFolio.png'
import SocialMedia from '../components/SocialMedia'

const About = () => {
    return (
        <div className="about-page-container  ">
            <div className="page-heading-container text-center py-5">
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
            </div>
            <div className="about-info-container">
                <div className="container p-5 align-content-center">
                    <h3>My name is Siegfred. I'm a self-taught web developer based in Helsinki, Finland.</h3>
                    <h5>I’m naturally inquisitive and enjoy figuring out how things work. I enjoy making thoughtful, engaging, and functional web applications that have a simple, clean and distinct design.</h5>
                    <h5>I'm a professional chef at a restaurant in the center of Helsinki. When I'm not at work, I spend my time working on my personal projects and building my own products.</h5>
                    <h5>When I'm not coding, I enjoy spending time with friends, watching tv series and walking around the city.</h5>
                </div>
                <div className="container p-3">
                <div className="row ">
                    <div className="col-md-6 my-3 ">
                        <div className="profile-column-container">
                            <div className="profile-image-container d-flex justify-content-center ">
                                <img className="profile-image" src={Image1} alt="..."/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 my-3">
                        <div className="profile-column-container">
                            <div className="profile-image-container d-flex justify-content-center ">
                                <img className="profile-image " src={Image1} alt="..."/>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
                
            </div>
            <SocialMedia/>
        </div>
        
    )
}

export default About
