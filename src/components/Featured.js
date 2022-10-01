import React from 'react'
import Bike1 from '../images/Bike-f1.png'
import Bike2 from '../images/Bike-f2.png'
import Bike3 from '../images/Bike-f3.png'
import Bike4 from '../images/Bike-f4.png'

const Featured = () => {
  return (
    <div className='featured-project-container'>
      <div className='featured-project-heading text-center p-3'>
        <h4 className='heading'>FEATURED PROJECT</h4>
      </div>
      <div className='fproject-images-container'>
        <div className='container'>
          <div className='row '>
            <div className='col-md-3 col-sm-6 d-flex justify-content-center '>
              <img
                className='fproject-image img-thumbnail img-fluid m-3'
                src={Bike1}
                alt='...'
              />
            </div>
            <div className='col-md-3 col-sm-6 d-flex justify-content-center'>
              <img
                className='fproject-image img-thumbnail img-fluid m-3'
                src={Bike2}
                alt='...'
              />
            </div>
            <div className='col-md-3 col-sm-6 d-flex justify-content-center'>
              <img
                className='fproject-image img-thumbnail img-fluid m-3'
                src={Bike3}
                alt='...'
              />
            </div>
            <div className='col-md-3 col-sm-6 d-flex justify-content-center'>
              <img
                className='fproject-image img-thumbnail img-fluid m-3'
                src={Bike4}
                alt='...'
              />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='fproject-name'>
            <h5 className='featured-project text-center'>Bike Finland</h5>
          </div>
          <div className='row'>
            <div className='col-md-6 p-3'>
              <div className='description  '>
                <h6 className='card-title'>The Brief</h6>
                <p className='card-title'>
                  Bike Finland is an application that helps the user in locating
                  Bike stations in Helsinki and Espoo. The user can filter and
                  search for the nearest stations.
                </p>
              </div>
            </div>
            <div className='col-md-6 p-3'>
              <div className='description'>
                <h6 className='card-title'>The Result</h6>
                <p className='card-title'>
                  Bike Finland is a full stack application that lets you do
                  basic search of a particular station.It returns basic
                  information and overview of the station and its location in
                  the map.It also has a login, signup and logout features.
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
