import React from 'react'
import {FaGithub,FaInstagramSquare,FaEnvelope,FaTwitterSquare} from 'react-icons/fa'
import {Link} from 'react-router-dom'



const SocialMedia = () => {
    return (
        <div className="social-media-container sticky-bottom">
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
                                <span><FaEnvelope/></span><Link className="social-link" to="mailto:dante_sparda1925@yahoo.com">  SIEGFRED GAMBOA</Link>
                            </div>
                            <div className="social-icon">
                                <span><FaGithub/></span><Link className="social-link" to="mailto:dante_sparda1925@yahoo.com">  ON GITHUB</Link>
                            </div>
                            <div className="social-icon">
                                <FaInstagramSquare/><Link className="social-link" to="mailto:dante_sparda1925@yahoo.com">  ON INSTAGRAM</Link>
                            </div>
                           
                            <div className="social-icon">
                                <FaTwitterSquare/><Link className="social-link" to="mailto:dante_sparda1925@yahoo.com">  ON TWITTER</Link>
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
