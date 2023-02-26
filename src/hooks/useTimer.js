import { useEffect, useState } from "react";

export const useTimer = () => {
    const [timeLeft, setTimeLeft] = useState(1*60);
    const [isCounter, setIsCounter] = useState(false);
    
    
    const getPadTime = (time) => time.toString().padStart(2, "0");
    
    const minutes = getPadTime(Math.floor(timeLeft/60));
    const seconds = getPadTime(timeLeft - minutes*60);
    
    useEffect (() => {
    const interval = setInterval (() => {
     isCounter &&
      setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
    }, 1000);
    return  () =>{
      clearInterval(interval)
    }
    }, [isCounter])
    
    
    
    const handleStart = () => {
      setIsCounter(true);
    };
    
    const handleStop = () => {
      setIsCounter(false);
    };
    
    const handleRestart = () => {
      setIsCounter(false);
      setTimeLeft(1*60);
    };

    return {
        minutes,
        seconds,
        handleStart,
        handleStop,
        handleRestart
    }
}


