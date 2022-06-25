import React, {useContext} from 'react'
import { themeContext } from '../../Context'
import "./Skills.css"
import html from "../../img/html.png"
import css from "../../img/css.png"
import js from "../../img/js.png"
import cpp from "../../img/cpp.png"
import reactIcon from "../../img/react.png"
import java from "../../img/java.png"
import sql from "../../img/sql.png"
import { motion } from 'framer-motion'

const Skills = () => {
  const theme = useContext(themeContext)
 const darkMode = theme.state.darkMode

  return (
    <div className="skills" id='skills'>
       <div className="left">
            <span style={{
               color : darkMode? "white":"black"}}>  EXPERIENCE </span>      
                      
            <div className="blur a-blur" style={{"background":"#ABF1FF94"}}></div>
      </div>

      <div className="s-right">
        <motion.div
        initial={{rotate: 45}}
        whileInView={{rotate : 0}}
        viewport={{margin: '-40px'}}
        transition={{duration: 3.5, type: 'spring'}}
        className="mainCircle">
          <div className="secCircle">
            <img src={html} alt="" />
          </div>
          <div className="secCircle">
            <img src={css} alt="" />
          </div>
          <div className="secCircle">
            <img src={js} alt="" />
          </div>
          <div className="secCircle">
            <img src={reactIcon} alt="" />
          </div>
          <div className="secCircle">
            <img src={cpp} alt="" />
          </div>
          <div className="secCircle">
            <img src={java} alt="" />
          </div>
          <div className="secCircle">
            <img src={sql} alt="" />
          </div>
          <div className="secCircle">
            <strong>SKILLS</strong>
            </div>
        </motion.div>

        <div className="backCircle blueCircle"></div>
        <div className="backCircle yellowCircle"></div>
      </div>
    </div>
  )
}

export default Skills