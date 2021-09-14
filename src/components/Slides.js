import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CovidAppImage4 from '../images/CAI-Phone.png'
import {Link} from 'react-router-dom'

const Slides = () => {
    return (
        <div className="bg-dark">>
            <div className="container">
            <div className="carousel-wrapper">
                <Carousel 
                infiniteLoop useKeyboardArrows 
                autoPlay 
                showThumbs={false} 
                showStatus={false}>
                    <div className="text-center">
                        <img src={CovidAppImage4} alt="project"/>
                    </div>
                    <div className="text-center">
                        <img src={CovidAppImage4} alt="project"/>
                    </div>
                    <div className="text-center">
                        <img src={CovidAppImage4} alt="project"/>
                    </div>
                </Carousel>
                <div className="text-center">
                    <button className="btn btn-primary rounded-pill mt-3 justify-content-center"><Link className="button-link" to="/portfolio">View all Projects</Link></button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Slides
