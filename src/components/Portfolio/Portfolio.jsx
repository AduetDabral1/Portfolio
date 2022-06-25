import React, {useContext} from 'react'
import { themeContext } from '../../Context'
import "./Portfolio.css"
import {Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import ecommerce from "../../img/ecommerce.png"
import jobscheduler from "../../img/jobscheduler.png"
import portfolio from "../../img/portfolio.png"
import textutils from "../../img/textutils.png"


const Portfolio = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    
  return (
    <div className="portfolio" id='Portfolio'>
        {/* heading */}
        <span style={{
               color : darkMode? "white":"black"}}>Recent Projects</span>
        <span>Portfolio</span>


        {/* Slider */}
        <Swiper
        spaceBetween={80}
        slidesPerView={2}
        grabCursor={true}
        className="portfolio-slider">
            <SwiperSlide>
                <img src={ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={jobscheduler} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={portfolio} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={textutils} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio