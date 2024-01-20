import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { dataTeam } from "./dataTeam";

function Team () {
    const container = useRef();

    useGSAP(() => {
      gsap.from(".dancerMainPhoto", {opacity:0, duration:1.5, delay: 1.5}); 
      gsap.from(".dancerMain", {x:3000, duration: 1.5});
      gsap.from(".dancerOverlap", {x:3000, duration:1.5, delay:0.3});
      gsap.from(".textTeam",{opacity:0, duration:1.5,delay:1.5});
      gsap.from(".prev",{opacity:0, duration:1.5,delay:1.5});
  
    }, { scope: container }) 

    const [team, setTeam] = useState(0);
    const {name, dance, description,image, imageOne, imageTwo} = dataTeam[team];

    const previous = () =>{
        setTeam((team => {
            team --;
            if (team < 0){
                return dataTeam.length - 1;
            }
            return team;
        }))
    }

    const next = () =>{
        setTeam((team =>{
            team ++;
            if (team > dataTeam.length - 1){
                return team = 0;
            }
            return team;
        }))
    }

    return(
       <div>
        <div className="teamQuote" >
        <h3 className="textQuoteTeam">“The body says what words cannot.”</h3>
        <p className="authorQuoteTeam">Martha Graham</p>
        </div>


        <div ref = {container} className="commonTeam"> 
            <img className='dancerMainPhoto' src = {image} width='600px' alt = 'dancer'/>
        
           <div className='right'>
            <div className = "textTeam">
            <h2 className="dancerName">{name}</h2>
            <p className="danceName">{dance}</p>
            <p className="danceDescr">{description}</p>
            </div>

            <div className="picturesTeam">
           <img className='dancerMain' src = {imageOne} width='450px' alt = 'dancer'/>
           <img  className='dancerOverlap'src = {imageTwo} width ='450px' alt = 'dancer'/> 
           </div>

           </div>

            </div>
            <div  className='prev_next'>
            <button className='prev' onClick={previous}>Previous</button>
            <button  className='prev' onClick={next}>Next</button>
           </div>

        
        </div>
        
    )
}
export default Team;