import React from 'react'
import Banner from '../components/Banner'
import Featured from '../components/Featured'
import ProjectSlides from '../components/ProjectSlides'
import SocialMedia from '../components/SocialMedia'

const Home = () => {
    return (
        <div className="home-page-container mt-5">
            <Banner/>
            <Featured/>
            <ProjectSlides/>
            <SocialMedia/>
        </div>
    )
}

export default Home
