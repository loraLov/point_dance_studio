
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import imageOne from './kids.jpeg';
import imageTwo from './girl.jpeg';
import imageThree from './contemp.jpeg';

function DanceInfo ({dance}){ 

const container = useRef();
useGSAP(() => {
    gsap.from(".danceMainPic", {x:-2000, duration:1.5}); 
    gsap.from(".danceOverlapPic", {x:3000, duration: 1.5});
    gsap.from(".allDance", {opacity:0, delay:1.5})
    gsap.from(".commonDance",{opacity:0, stagger:0.2, duration:1.5,delay:1.5})

  }, { scope: container }) 
  
    return(
    <div>
      <div ref = {container} className='danceContainer'>
        <div className='dance_images'>
          <img className='danceMainPic' src={imageOne} width='500px' alt = 'ballet'/>
          <img className = 'danceOverlapPic'src = {imageTwo} width = '500px' alt = 'ballet'/>
        </div>

        <div className='allDance'>
          {dance.map((element) =>{
          const {id, imageDance, name, duration, groups, price} = element;
            return(
              <div className='commonDance' key = {id}>
                <img className='imageDance' src ={imageDance} width = '50px' alt = 'dance'/>
                <p className='danceName'>{name}</p>
                <p className='textDance'> {duration}</p>
                <p className='textDance'>{groups}</p>
                <p className='textDance'> {price}</p>
              </div>
        )
      })}
        </div>
      </div>

      <div className='quote'>
         <p>“Dance for yourself. If someone understands, good. If not, no matter.” </p>
         <p className='author'>Louis Horst</p>
         <img className='finalImage' src = {imageThree} width = '90%' alt = 'contemp_dance'/>
      </div>
      
    </div>
    )
}
export default DanceInfo;