import React, {useContext} from 'react'
import { themeContext } from '../../Context'
import './Cards.css'


const Cards = ({emoji,heading,detail}) => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span style={{
               color : darkMode? "white":"black"}}>{heading}</span>
        <span>{detail}</span>
        <button className="c-button">Learn More</button>
    </div>
  )
}

export default Cards