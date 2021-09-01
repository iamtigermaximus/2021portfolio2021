import React from 'react'
import Banner from '../components/Banner'
import Featured from '../components/Featured'
import SocialMedia from '../components/SocialMedia'
import SwiperSlides from '../components/SwiperSlides'

const Home = () => {
    return (
        <div className="home-page-container">
            <Banner/>
            <Featured/>
            <SwiperSlides/>
            <SocialMedia/>
        </div>
    )
}

export default Home
