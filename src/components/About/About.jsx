import React, {useContext} from 'react'
import { themeContext } from '../../Context'
import "./About.css";
import Resume from "./Aduet Dabral.pdf"
import { motion } from 'framer-motion'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Cards/Cards'

const About = () => {
  const theme = useContext(themeContext)
 const darkMode = theme.state.darkMode
 const transition = {duration : 2, type : 'spring'}

  return (
   <div className="about" id='about'>
      <div className="left">
            <span style={{
               color : darkMode? "white":"black"}}>  There are three responses to a  </span>
            <span style={{
               color : darkMode? "white":"black"}}>  piece of design -     </span>
            <span>  Yes, No and WOW!           </span>
            <span>  <strong>Wow</strong> is the one to aim for.      </span>
            <a href={Resume} download={"AduetDabral"}>
                <button className="button a-button">
                  Download Resume
                </button>
            </a>
            <div className="blur a-blur" style={{"background":"#ABF1FF94"}}></div>
      </div>

      <motion.div
      initial={{left:'14rem'}}
      whileInView={{left : '-5%'}}
      transition={transition}
      className="cards">
          <div style={{"left":"22rem"}}>
            <Card
              emoji= {HeartEmoji}
              heading = {"ReactJS Development"}
              detail = {"HTML, CSS, JavaScript, React"}
              />
          </div>
          <div style={{"left":"4rem", "top":"12rem"}}>
            <Card
              emoji= {Glasses}
              heading = {"C++ Programming"}
              detail = {""}
              />
          </div>
          <div style={{"left":"19rem", "top":"19rem"}}>
            <Card
              emoji= {Humble}
              heading = {"Data Analytics"}
              detail = {""}
              />
          </div>
          <div className="blur a-blur2" style={{"background":"var(--purple)"}}></div>
      </motion.div>
   </div>
  )
}

export default About