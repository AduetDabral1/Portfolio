import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Certificates from "./components/Certifications/Certificates";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Certificates/>
      <Skills/>
    </div>
  );
}

export default App;
