import { useState } from "react";

 export const useCounter = () => {
    const [count, setCount] = useState(0);

 const increment = () => {
    if (count > 3) {
   setCount(count => count + 4 )
    } else {
        setCount(count => count + 1 )  
    }
 };

 const decrement = () => {
  if (count < 3){
    setCount(count => count - 2 )
  } else {
    setCount(count => count - 1 )
  }
};
 
const reset = () =>{
    setCount(0)
};

   return {
     count,
     increment,
     decrement,
     reset
   }
}