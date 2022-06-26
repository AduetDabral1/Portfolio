import React, {useContext} from 'react'
import { themeContext } from '../../Context'
import "./Portfolio.css"
import {Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
// import GitHub from '../../img/github.png'
import ecommerce from "../../img/ecommerce.png"
import jobscheduler from "../../img/jobscheduler.png"
import PortFolio from "../../img/portfolio.png"
import textutils from "../../img/textutils.png"
import GitHub from "@iconscout/react-unicons/icons/uil-github"

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
                <div className="projects">
                    <img src={ecommerce} alt="" />
                    <span className="head">E-Commerce Website</span>
                    <span className='desc'>Responsive website build using HTML,CSS,Bootstrap and PHP</span>
                    <a href="https://github.com/AduetDabral1/E-Commerce-Website" target="_blank" className="center">
                    <GitHub color="var(--orange)" size="2rem"/>
                    </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="projects">
                    <img src={jobscheduler} alt="" />
                    <span className="head">OS Job Scheduling Algorithms</span>
                    <span className='desc'>Used C++ to implement various job scheduling algorithms</span>
                    <a href="https://github.com/AduetDabral1/Job-Scheduling-CPP-implementation" target="_blank" className="center">
                    <GitHub color="var(--orange)" size="2rem"/>
                    </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="projects">
                    <img src={PortFolio} alt="" />
                    <span className="head">Portfolio Website</span>
                    <span className='desc'>Website created using ReactJS</span>
                    <a href="https://github.com/AduetDabral1/Portfolio" target="_blank" className="center">
                    <GitHub color="var(--orange)" size="2rem"/>
                    </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="projects">
                    <img src={textutils} alt="" />
                    <span className="head">TextUtils</span>
                    <span className='desc'>A text utility CRUD created using ReactJS</span>
                    <a href="https://github.com/AduetDabral1/ReactJS/tree/main/myApp" target="_blank" className="center">
                    <GitHub color="var(--orange)" size="2rem"/>
                    </a>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio