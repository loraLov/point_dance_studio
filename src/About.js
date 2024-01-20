import { useState, useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import image_one from './new_8.jpeg';
import image_three from './new_4.jpeg';
import image_four  from './ballet_2.jpeg';
import image_five from './grad.jpeg';
import image_six from './trophy.jpeg';
import image_seven from './dance_pair.jpeg';
import image_eight from './ballet_icon.jpeg';
import star from './star.jpeg';
import { data } from './data';

function About (){

  const container = useRef();
  useGSAP(() => {
    gsap.from(".pic_main", {x:-2000, duration:1.5}); 
    gsap.from(".pic_overlap", {x:3000, duration: 1.5});
    gsap.from(".text", {opacity:0, delay:1, duration:2});

  }, { scope: container }) 

  const[reviews] = useState(data);
  const [showText, setShowText] = useState(false);
  const showTextClick = (element) => {
      element.showMore = !element.showMore;
      setShowText(!showText);
    }

  return( 
    <div>
      <div ref = {container} className='mainClass'>
        <div className='pictures'>
          <img className='pic_main' src = {image_three} width = '500px' alt = 'dance'/>
          <img className='pic_overlap' src = {image_four} width = '500px' alt = 'dance'/>
        </div>

        <div className='text'>
          <p>Our dance studio was opened in 2010.</p>
          <p>The idea of creating the studio belongs to the American dancer Jack Harman, who wanted to pass on his experience to a new generation of dancers.</p>
          <p>The graduates of our school teach choreagraphy all over the world, many of them have created their own dance studios, others have become laureats of international dance conpetitions.</p>
          <p>The main idea of our school is self-expression of one's personality through dance.</p>
          <p>We will help you discover more into yourself that you might expect.</p>
        </div> 
      </div>

      <div className='blocks'>
        <div className='block'>
          <img className='logo_numbers' src = {image_five} alt = 'grad' width = '50px'/>
          <p className='numbers'><span>820</span> graduates</p>
         
        <div className='block'>
          <img className='logo_numbers'  src = {image_six} alt = 'trophy' width = '50px'/>
          <p className='numbers'> <span>38</span> inernational laureates</p>
        </div>
       </div> 
       
        <div className='block'>
          <img className='logo_numbers'  src = {image_seven} width = '50px' alt = 'dance_style'/>
          <p className='numbers'><span>9</span> dance styles</p>
        </div>
        <div className='block'>
          <img className='logo_numbers'  src = {image_eight} width = '60px' alt = 'bllet_icon' />
          <p className='numbers'><span>6</span> experienced choreographers</p>
        </div>
      
      </div>

      <img className='pic_about' src = {image_one} width = '100%' alt = 'dance'/>
      
      <div className='reviews_header'>
        <h2 className='review'>Reviews</h2>
      </div>
      <div className='allRev'>
        {reviews.map((element) =>{
            const{id, name, rev, showMore} = element;
            return(
                <div className='mainRev' key = {id}>
                  <h3 className='name_rev'>{name}</h3>
                  <p className='text_rev'>{showMore ? rev : rev.substring(0,80) + '...'}
                  <button className='btn_rev' onClick = {() => showTextClick(element)}>{showMore ? 'Show less' : 'Show more'}</button>
                  </p>
                  <div className='stars'>
                  <img className='star' src = {star} width = '20px' alt = 'star'/>
                  <img className='star' src = {star} width = '20px' alt = 'star'/>
                  <img className='star' src = {star} width = '20px' alt = 'star'/>
                  <img className='star' src = {star} width = '20px' alt = 'star'/>
                  <img className='star' src = {star} width = '20px' alt = 'star'/>
                  </div>
                  <hr/>
                </div>
            )
        })}
      </div>

    </div>
    )
}
export default About;