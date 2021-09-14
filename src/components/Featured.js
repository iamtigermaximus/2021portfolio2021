import React from 'react'
import CovidAppImage1 from '../images/CAI-L1.png'
import CovidAppImage2 from '../images/CAI-Laptop.png'
import CovidAppImage3 from '../images/CAI-Tablet.png'
import CovidAppImage4 from '../images/CAI-Phone.png'

const Featured = () => {
    return (
        <div className="featured-project-container">
            <div className="featured-project-heading text-center p-3">
                <h4 className="heading">FEATURED PROJECT</h4>
            </div>
            <div className="fproject-images-container">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-3 col-sm-6 d-flex justify-content-center ">
                            <img className="fproject-image img-thumbnail img-fluid m-3" src={CovidAppImage1} alt="..."/>
                        </div>
                        <div className="col-md-3 col-sm-6 d-flex justify-content-center">
                            <img className="fproject-image img-thumbnail img-fluid m-3" src={CovidAppImage2} alt="..."/>
                        </div>
                        <div className="col-md-3 col-sm-6 d-flex justify-content-center">
                            <img className="fproject-image img-thumbnail img-fluid m-3" src={CovidAppImage3} alt="..."/>
                        </div>
                        <div className="col-md-3 col-sm-6 d-flex justify-content-center">
                            <img className="fproject-image img-thumbnail img-fluid m-3" src={CovidAppImage4} alt="..."/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="fproject-name">
                        <h5 className="featured-project text-center">CORONA TRACKER</h5>
                    </div>
                    <div className="row">
                        <div className="col-md-6 p-3">
                            <div className="description  ">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum iaculis eu. Purus viverra accumsan in nisl nisi. Neque laoreet suspendisse interdum consectetur. Duis convallis convallis tellus id. </p>
                            </div>
                        </div>
                        <div className="col-md-6 p-3">
                            <div className="description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum iaculis eu. Purus viverra accumsan in nisl nisi. Neque laoreet suspendisse interdum consectetur. Duis convallis convallis tellus id. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
