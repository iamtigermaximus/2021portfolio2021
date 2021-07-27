import React from 'react'
import Image1 from '../images/portfoliopic.png'


const Banner = () => {
    return (
        <div className="banner-page-container p-5 ">
            <div className="container-fluid p-3">
                <div className="row no-gutters">
                    <div className="col-md-6 my-3 text-center">
                        <div className="profile-column-container">
                            <div className="profile-image-container d-flex justify-content-center ">
                                <img className="profile-image rounded-circle " src={Image1} alt="..."/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 my-3  d-flex justify-content-center">
                        <div className="greeting-column-container ">
                            <div className="greeting-heading text-center">
                                <h1 className="greeting p-3">Hey, I'm Siegy.</h1>
                            </div>
                            <div className="intro-text text-justify">
                                <h2 className="greeting-subtext">
                                A front end developer from the Philippines living in Helsinki. I create meaningful websites and projects to help people go further online.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Banner
