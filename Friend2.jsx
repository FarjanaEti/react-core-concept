export default function Friend2({friend}){
   //const [price,breed]=friend;
  console.log(friend);
   return(
     <div>
         <h4>Name:{friend.category}</h4>   
         <p>Breed:{friend.breed}</p>                  
     </div>                         
   )
}