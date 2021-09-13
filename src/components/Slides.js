import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProjectImage1 from '../images/project-image1.jpg'

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
                        <img src={ProjectImage1} alt="project"/>
                    </div>
                    <div className="text-center">
                        <img src={ProjectImage1} alt="project"/>
                    </div>
                    <div className="text-center">
                        <img src={ProjectImage1} alt="project"/>
                    </div>
                </Carousel>
            </div>
        </div>
        </div>
    )
}

export default Slides
