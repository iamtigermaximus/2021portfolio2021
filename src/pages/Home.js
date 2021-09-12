import React from 'react'
import Banner from '../components/Banner'
import Featured from '../components/Featured'
import SocialMedia from '../components/SocialMedia'
import ProjectSlides from '../components/ProjectSlides'


const Home = () => {
    return (
        <div className="home-page-container">
            <Banner/>
            <Featured/>
            <ProjectSlides/>
            <SocialMedia/>
        </div>
    )
}

export default Home
