
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper/core';
import ProjectImage2 from '../images/project-image2.jpg'
import {Link} from 'react-router-dom'
// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);


export default function App() {
  
  
  
  return (
    <div>
    <div className="swiper-container py-5">
    <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
  "delay": 2500,
  "disableOnInteraction": false
}} pagination={{
  "clickable": true
}} navigation={true} className="mySwiper">
  <SwiperSlide>
      <img src={ProjectImage2} alt="project"/>
  </SwiperSlide>
  <SwiperSlide><img src={ProjectImage2} alt="project"/></SwiperSlide>
  <SwiperSlide><img src={ProjectImage2} alt="project"/></SwiperSlide>
  <SwiperSlide><img src={ProjectImage2} alt="project"/></SwiperSlide>
  <SwiperSlide><img src={ProjectImage2} alt="project"/></SwiperSlide>
  <SwiperSlide><img src={ProjectImage2} alt="project"/></SwiperSlide>
  </Swiper>
  <div className="text-center">
  <button className="btn btn-primary rounded-pill mt-3 justify-content-center"><Link className="button-link" to="/portfolio">View all Projects</Link></button>
  </div>
    </div>
    </div>
  )
}