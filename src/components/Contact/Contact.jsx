import React, {useRef, useState, useContext} from 'react'
import { themeContext } from '../../Context'
import "./Contact.css"
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zl356dh', 'template_9h6uo2n', form.current, 'nDFY35WDpttef9qFO')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className="contact">
            <div className="c-left">
                <span  style={{
               color : darkMode? "white":"black"}}>Get in touch</span>
                <span>Contact me</span>
                <div className="blur c-blur" style={{ "background": "#ABF1FF94" }}></div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className='user' placeholder='Enter your name' />
                    <input type="email" name="user_email" className='user' placeholder='Enter you email' />
                    <textarea name="message" className='user' cols="30" rows="10" placeholder='Enter your message'></textarea>
                    <input type="submit" value="Send" className='button' />
                    <span>{done && "Thank you for contacting me!"}</span>
                    <div className="blur c-blur2" style={{ "background": "var(--purple)" }}></div>
                </form>
            </div>
        </div>
    )
}

export default Contact