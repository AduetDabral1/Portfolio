import React from 'react'
import './Home.css'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import GitHub from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vec1 from '../../img/Vector1.png'
import Vec2 from '../../img/Vector2.png'
import Image2 from '../../img/image2.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import Humble from '../../img/humble.png'

const Home = () => {
  return (
    <div className="home">
        <div className="h-left">
            <div className="h-name">
                <span>Hi! I Am </span>
                <span>Aduet Dabral</span>
                <span>A Front End developer passionate about creating interactive applications and experiences on the web. </span>
            </div>
            <div className="h-icons">
                <a href="https://github.com/AduetDabral1">
                    <img src={GitHub} alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/aduet-dabral-0289851a1/">
                    <img src={LinkedIn} alt="LinkedIn" />                    
                </a>
                <a href="https://www.instagram.com/aduet.dabral/">
                    <img src={Instagram} alt="Instagram" />
                </a>
            </div>
        </div>

        <div className="h-right">
            <img src={Vec1} alt="" />
            <img src={Vec2} alt="" />
            <img src={Image2} alt="" />
            <img src={Humble} alt="" />

            <div style={{"top":"17rem","left":"51%"}}>
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </div>
            <div style={{"top":"17rem","left":"0rem"}}>
                <FloatingDiv image={thumbup} txt1='AI' txt2='Enthusiast'/>
            </div>

            <div className="blur" style={{"backgroundColor":"rgb"}}>
            </div>
            <div className="blur" style={{"background":"#C1F5FF", "top":"14rem", "width":"21rem", "height":"11rem","left":"-9rem"}}>
            </div>

        </div>

    </div>
  )
}

export default Home
