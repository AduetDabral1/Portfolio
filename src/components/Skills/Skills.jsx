import React from 'react'
import "./Skills.css"
import html from "../../img/html.png"
import css from "../../img/css.png"
import js from "../../img/js.png"
import cpp from "../../img/cpp.png"
import reactIcon from "../../img/react.png"
import java from "../../img/java.png"
import sql from "../../img/sql.png"

const Skills = () => {
  return (
    <div className="skills">
       <div className="left">
            <span>  EXPERIENCE </span>      
                      
            <div className="blur a-blur" style={{"background":"#ABF1FF94"}}></div>
      </div>

      <div className="s-right">
        <div className="mainCircle">
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
        </div>

        <div className="backCircle blueCircle"></div>
        <div className="backCircle yellowCircle"></div>
      </div>
    </div>
  )
}

export default Skills