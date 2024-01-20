import { useState } from "react";
import ButtonDance from "./ButtonDance";
import DanceInfo from "./DanceInfo";
import { dataDance } from "./dataDance";

 function Dance(){
    const [dance, setDance] = useState(dataDance);
    const chosenDance = (searchTerm) =>{
        const newChosenDance = dataDance.filter(element => element.searchTerm === searchTerm);
        setDance(newChosenDance);
    }
    return(
        <div>
        <ButtonDance chosenDance = {chosenDance}/>
        <DanceInfo dance = {dance}/>
        </div>
    )
 }
 export default Dance;