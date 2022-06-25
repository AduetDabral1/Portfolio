import React, { useContext } from 'react'
import { themeContext } from '../../Context'
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
import { motion } from 'framer-motion'

const Home = () => {
    const transition = {duration : 2, type : 'spring'}
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode


    return (
        <div className="home">
            <div className="h-left">
                <div className="h-name">
                    <span style={{
                        color: darkMode ? "white" : "black"
                    }}>
                        Hi! I Am </span>
                    <span>Aduet Dabral</span>
                    <span>A Front End developer passionate about creating interactive applications and experiences on the web. </span>
                </div>
                <div className="h-icons">
                    <a href="https://github.com/AduetDabral1" target="_blank">
                        <img src={GitHub} alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/aduet-dabral-0289851a1/" target="_blank">
                        <img src={LinkedIn} alt="LinkedIn" />
                    </a>
                    <a href="https://www.instagram.com/aduet.dabral/" target="_blank">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                </div>
            </div>

            <div className="h-right">
                <img src={Vec1} alt="" />
                <img src={Vec2} alt="" />
                <img src={Image2} alt="" />
                <motion.img
                initial={{left:'-26%'}}
                whileInView={{left : '-8%'}}
                transition={transition}
                src={Humble} alt="" />

                <motion.div
                initial={{left:'74%'}}
                whileInView={{left : '58%'}}
                transition={transition}
                style={{ "top": "17rem", "left": "51%", color: darkMode ? "black" : "black" }}
                className="floatingDiv">
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
                </motion.div>
                <motion.div
                initial={{left:'-24%'}}
                whileInView={{left : '-2%'}}
                transition={transition}
                style={{ "top": "17rem", "left": "0rem", color: darkMode ? "black" : "black" }}
                className="floatingDiv">
                    <FloatingDiv image={thumbup} txt1='AI' txt2='Enthusiast' />
                </motion.div>

                <div className="blur" style={{ "backgroundColor": "rgb" }}>
                </div>
                <div className="blur" style={{ "background": "#C1F5FF", "top": "14rem", "width": "21rem", "height": "11rem", "left": "-9rem" }}>
                </div>

            </div>

        </div>
    )
}

export default Home
