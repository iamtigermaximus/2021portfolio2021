import React from 'react'
import Banner from '../components/Banner'
import Featured from '../components/Featured'
import SocialMedia from '../components/SocialMedia'
import Slides from '../components/Slides'

const Home = () => {
  return (
    <div className='home-page-container'>
      <Banner />
      <Featured />
      <Slides />
      <SocialMedia />
    </div>
  )
}

export default Home
