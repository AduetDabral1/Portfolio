import React from "react"
import "./Footer.css"
import Wave from "../../img/wave.png"
import Insta from "@iconscout/react-unicons/icons/uil-instagram"
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin"
import GitHub from "@iconscout/react-unicons/icons/uil-github"

const Footer = () => {
  

  return (
    
    <div className="footer">
        <img src={Wave} alt="" style={{"width":"100%"}}/>

        <div className="f-content">
            <span>dabral.aduet@gmail.com</span>

        <div className="f-icons">
        <a href="https://www.instagram.com/aduet.dabral/" target="_blank">
            <Insta color="white" size="3rem"/>
        </a>
            <a href="https://www.linkedin.com/in/aduet-dabral-0289851a1/" target="_blank">
            <LinkedIn color="white" size="3rem"/>
            </a>
            <a href="https://github.com/AduetDabral1" target="_blank">
            <GitHub color="white" size="3rem"/>
            </a>
        </div>
        </div>
    </div>
  )
}

export default Footer