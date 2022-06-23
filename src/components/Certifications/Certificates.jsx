import React from 'react'
import "./Certificates.css"
import web from "../../img/cert1.png"
import ds from "../../img/cert2.png"
import ml from "../../img/cert3.png"
const Certificates = () => {
  return (
    <>
        <h2>Certificates</h2>
      <div className="certificates">
        <div className="cert">
            <a href="https://drive.google.com/file/d/1z658FigAKZi_aqAZcoVxTKsGeDcHjQFh/view?usp=sharing" target="_blank">
                <div className="circle"> 
                <img src={web} alt="" id='web' />
                 </div>
                <span className='head'>Web development</span>
            </a>
                <span>Internshala</span>
        </div>

        <div className="cert">
            <a href="https://drive.google.com/file/d/1YK7nb_I_E56pqBdAAAfIqgQWJGycXKBk/view?usp=sharing" target="_blank">
                <div className="circle"> 
                <img src={ml} alt="" id='ml'/>
                 </div>
                <span className='head'>Machine Learning</span>
            </a>
                <span>Coursera</span>
        </div>

        <div className="cert">
            <a href="https://drive.google.com/file/d/1ra64-YmRIGgaxCrkyAppcN50szYvX4aQ/view?usp=sharing" target="_blank">
                <div className="circle">
                    <img src={ds} alt="" id='ds'/>  </div>
                <span className='head'>Data Science</span>
            </a>
                <span>Internshala</span>
        </div>

    </div>
    </>
  )
}

export default Certificates