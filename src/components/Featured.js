import React from 'react'
import StarShopImage1 from '../images/starshop-image1.png'
import StarShopImage2 from '../images/starshop-image4.png'
import StarShopImage3 from '../images/starshop2.png'
import StarShopImage4 from '../images/starshop6.png'

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
                            <img className="fproject-image img-thumbnail img-fluid m-3" src={StarShopImage1} alt="..."/>
                        </div>
                        <div className="col-md-3 col-sm-6 d-flex justify-content-center">
                            <img className="fproject-image img-thumbnail img-fluid m-3" src={StarShopImage2} alt="..."/>
                        </div>
                        <div className="col-md-3 col-sm-6 d-flex justify-content-center">
                            <img className="fproject-image img-thumbnail img-fluid m-3" src={StarShopImage3} alt="..."/>
                        </div>
                        <div className="col-md-3 col-sm-6 d-flex justify-content-center">
                            <img className="fproject-image img-thumbnail img-fluid m-3" src={StarShopImage4} alt="..."/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="fproject-name">
                        <h5 className="featured-project text-center">StarShop- E-Commerce Website</h5>
                    </div>
                    <div className="row">
                        <div className="col-md-6 p-3">
                            <div className="description  ">
                                <h6 card-title>The Brief</h6>
                                <p className="card-title">
                                Online commerce offers a plethora of benefits, from selling everywhere to personalized experiences that drive loyalty.The goal of this project is to build a website that is easy to navigate and to have a cart functionality.
                                 </p>
                            </div>
                        </div>
                        <div className="col-md-6 p-3">
                            <div className="description">
                                <h6 card-title>The Result</h6>
                                <p className="card-title">
                               StarShop was inspired by the leading online fashion store in Europe.The website is responsive and can be viewed in different devices. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
