import React from 'react'
import "./Testimonial.css"
import {Swiper, SwiperSlide} from "swiper/react"
import { Pagination } from 'swiper'
import "swiper/css/pagination"
import "swiper/css"
import profile1 from "../../img/profile1.jpg"
import profile2 from "../../img/profile2.jpg"
import profile3 from "../../img/profile3.jpg"
import profile4 from "../../img/profile4.jpg"
// import profile1 from "../../img/profile1.jpg"

const Testimonial = () => {

  const references = [
    {
      img: profile1,
      review : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate non sint consequuntur blanditiis labore deleniti illum possimus inventore facilis tenetur?"
    },
    {
      img: profile2,
      review : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate non sint consequuntur blanditiis labore deleniti illum possimus inventore facilis tenetur?"
    },
    {
      img: profile3,
      review : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate non sint consequuntur blanditiis labore deleniti illum possimus inventore facilis tenetur?"
    },
    {
      img: profile4,
      review : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate non sint consequuntur blanditiis labore deleniti illum possimus inventore facilis tenetur?"
    },
  ]

  return (
    <div className="testimonial">
      <div className="t-heading">
        <span>Hear from my</span>
        <span> Colleagues</span>
        <div className="blur t-blur" style={{"background":"#ABF1FF94"}}></div>
        <div className="blur t-blur2" style={{"background":"var(--purple)"}}></div>

      </div>

      {/* slider */}
      <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{clickable:true}}>

        { references.map((reference, index)=> {
          return(
            <SwiperSlide key={index}>
              <div className="refer">
                <img src={reference.img} alt="" />
                <span>{reference.review}</span>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Testimonial