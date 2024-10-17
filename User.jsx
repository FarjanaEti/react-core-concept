import { useEffect, useState } from "react";

export default function User(){
     const [use, setUser]= useState([])  ;
     useEffect(()=>{
         fetch('https://openapi.programming-hero.com/api/peddy/pets') 
         .then(res=>res.json())
         .then(data=>setUser(data.pets))                    
     },[])
     
     return(
        <h3>User:{use.length}</h3>                      
     )
}