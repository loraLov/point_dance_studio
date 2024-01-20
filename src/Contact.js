import { useState, useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import image from './main.jpg';
import { Modal } from './Modal/Modal';
import Content from './Modal/Content';

function Contact (){
   
    const container = useRef();

  useGSAP(() => {
    gsap.from(".btnTrial", {y:-1500, ease:'bounce', duration:1.5, delay:0.5}); 
  
  }, { scope: container }) 
     
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div>
     
    <div ref = {container} className='textTrial'>
       <h1 className='headerTrial'>Trial class for free</h1>
       <p className='parTrial'>In order to choose your preferred dance style, we invite you to a free trial lesson for any dance class. There you will find out how our classes work, meet the teachers and take your first step into the world of dance.</p>

       <button onClick = {() => setIsOpen(true)} className='btnTrial'>Get a trial class</button>
       {isOpen &&
        <Modal setIsOpen = {setIsOpen}>
       <Content setIsOpen = {setIsOpen}/>
       </Modal>
       }
   </div>

    <img className='imageTrial' src = {image} width='100%' alt = 'dance'/>
        
          
       <div className='footer'>

       <div className="workingHours">
       <h2 className='work'>Working Hours</h2>
       <p className="cont">Monday - Friday: 9.00AM - 8.00PM</p>
       <p  className="cont">Saturday: 9.00AM - 3.00PM</p>
       <p  className="cont">Sunday: Closed</p>
       </div>

       <div className="workingHours"> 
       <h2 className='work'>Location</h2>
       <p  className="cont">Address: 250 MacArthur ave., Paramus, NJ, 07653</p>
       <p  className="cont">Phone Number: +1(111)123-45-67</p>
       </div>
           
       <div className='workingHours'>
        <h2 className='work'>Send us a message</h2>
        <form
          className='mail'
          action="https://formspree.io/f/mdoqkbvr"
          method="POST"
         >
        <label>
        Your email:
        <input className='email' required = "" type="email" name="email"/>
        </label> 
        <label>
        Your message:
       <textarea className='message' required = "" name="message"></textarea>
       </label>
       <button className='mailBtn' type="submit">Send</button>
       </form>
       </div>

       </div>

       </div>
    )
}
export default Contact;


