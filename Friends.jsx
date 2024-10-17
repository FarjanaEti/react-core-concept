import { useEffect, useState } from "react";
import Friend2 from "./Friend2";

export default function Friends(){
    const [friends, setFriend]=useState([]);
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/peddy/pets')
         .then(res=>res.json())
         .then(data=>setFriend(data.pets))             
    },[])  
    return(
      <div>
         <h3>Friends:{friends.length}</h3>  
          {
          friends.map(friend=> <Friend2 friend={friend}></Friend2>) 
                           
          }                   
      </div>                        
    )                         
}