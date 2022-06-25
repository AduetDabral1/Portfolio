import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'
import Skills from '../Skills/Skills'
import About from '../About/About'
import Portfolio from "../Portfolio/Portfolio"

const Navbar = () => {
  return (
    <nav className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Aduet Dabral</div>   
        </div>

        <div className="n-right">
            <div className="n-list">
                <ul>
                    <Link spy={true} to="navbar" smooth={true} activeClass="activeClass">
                    <li>Home</li>
                    </Link>
                    <Link spy={true} to="about" smooth={true} activeClass="activeClass">
                    <li>About</li>
                    </Link>
                    <Link spy={true} to="Portfolio" smooth={true} activeClass="activeClass">
                    <li>Portfolio</li>
                    </Link>
                    <Link spy={true} to="skills" smooth={true} activeClass="activeClass">
                    <li>Skills</li>
                    </Link>
                    <Toggle/>
                </ul>
            </div>
            <button className="button">Contact Me</button>
        </div>
    </nav>
  )
}

export default Navbar