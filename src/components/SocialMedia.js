import React from 'react'
import {FaGithub,FaInstagramSquare,FaEnvelope,FaLinkedin} from 'react-icons/fa'
import {Link} from 'react-router-dom'



const SocialMedia = () => {
    return (
        <div className="social-media-container sticky-bottom pb-5">
            <div className="container">
                <div className="container p-2 mx-5">
                    <div className="row">
                        <div className="col-md-6 p-3">
                            <div className="social-heading pb-2">
                                <h3 className="social-title">Let's Work Together</h3>
                            </div>
                            <div className="social-subheading pb-2 mb-5">
                            <h6 className="social-subtitle">Have a project you'd like to discuss?</h6>
                        </div>
                                <button className="btn btn-primary rounded-pill mb-5"><Link className="button-link" to="/contact">Get in Touch</Link></button>
                            </div>
                        <div className="col-md-6 p-3 mb-5">
                            <div className="social-media p-2">
                                <div className="social-icon">
                                    <span><FaEnvelope/></span><a href="mailto:siegy.gamboa@gmail.com"  className="social-link">  SIEGFRED GAMBOA</a>
                                </div>
                                <div className="social-icon">
                                    <span><FaGithub/></span><a href="https://github.com/iamtigermaximus" className="social-link">  ON GITHUB</a>
                                </div>
                                <div className="social-icon">
                                    <FaInstagramSquare/><a href="instagram.com/iamtigermaximus" className="social-link">  ON INSTAGRAM</a>
                                </div>
                                <div className="social-icon">
                                    <FaLinkedin/><a href="https://www.linkedin.com/in/siegfred-gamboa-5b1277218" className="social-link">  ON LINKEDIN</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialMedia
