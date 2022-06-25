import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Certificates from "./components/Certifications/Certificates";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className="App"
    style={{
      background : darkMode?"black":'',
      color :darkMode?"white":''
    }}
    >
      <Navbar/>
      <Home/>
      <About/>
      <Certificates/>
      <Skills/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
