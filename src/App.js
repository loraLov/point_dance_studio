import{
   BrowserRouter as Router,
   Routes,
   Route,
   Link
  } from "react-router-dom";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import image from './balet.jpg';
import './App.css';
import Home from "./Home";
import About from "./About";
import Dance from "./Dance";
import Team from "./Team";
import Contact from "./Contact";
import music from "./my_music.mp3";
import play from "./music_btn.jpeg";
import pause from "./pause.jpeg";
import cross from "./cross.jpeg";
import menu from "./menu.jpeg";


function App() {

const container = useRef();

  useGSAP(() => {
    gsap.from(".link", {opacity:0, duration:3, stagger: .4, delay: 1}); 
    gsap.from(".header", {y:-500, duration: 1.5});
    gsap.from (".music_button",{opacity:0,duration:1.5, delay:3})

  }, { scope: container }) 

  const [musicPlay, setMusicPlay] = useState(true);

  const refAudio = useRef();

  const handlePlay = () => {
    setMusicPlay(!musicPlay);
    musicPlay ? refAudio.current.play() : refAudio.current.pause()
  }

  const [isOpen, setIsOpen] = useState(false);
   const showMenu = () =>{
    setIsOpen((open) => !open)
   }

  return (
    <div>

    <div className="menu">
    <button className="hamburger_btn" onClick = {showMenu}>{isOpen? <img src= {cross} width = '30px' alt = 'close'/> : <img src = {menu} width = '30px' alt = 'menu'/>}</button>
    </div>

      
    <div ref = {container} className="container">
     <div className='header'>
      <img className="logo" src = {image} width ='150px' alt = 'dance'/>
      <div className='head'>
      <h1>Point</h1>
      <h4>Dance Studio</h4>
      </div>
      </div>

      <div ref = {container} className="musical"> 
      <audio src = {music}
      loop = 'loop'
      ref = {refAudio}>
      </audio>
      <button className="music_button" onClick={handlePlay}>{musicPlay? <img className="play" src = {play} width ='35px' alt ='play'/> : <img  className = 'play' src = {pause} width ='35px' alt ='pause'/>}</button>
      </div>

  
      <Router>
        <nav ref = {container}  className={isOpen ? 'show' : 'close'}>
          <Link className = 'link' to = '/'>Home</Link>
          <Link className = 'link'  to = '/about'>About</Link>
          <Link className = 'link'  to = '/dance'>Dance Classes</Link>
          <Link className = 'link'  to = '/team'>Our Team</Link>
          <Link className = 'link'  to = '/contact'>Contact Us</Link>
        </nav>

        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/about'element = {<About/>}/>
          <Route path = '/dance' element = {<Dance/>}/>
          <Route path = '/team' element = {<Team/>}/>
          <Route path = '/contact' element ={<Contact/>}/>
        </Routes>
      </Router>
      
    </div>
    </div>
  );
}

export default App;
