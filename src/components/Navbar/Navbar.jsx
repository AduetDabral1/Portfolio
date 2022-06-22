import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Aduet Dabral</div>   
        </div>

        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Skills</li>
            <span>Toggle Mode</span> 
                </ul>
            </div>
            <button className="button">Contact Me</button>
        </div>
    </nav>
  )
}

export default Navbar