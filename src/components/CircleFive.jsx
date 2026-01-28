import { useEffect, useState } from "react";
import { hexadecimalGenerator } from "../utils/hexadecimalGenerator";

function CircleFive() {
    const [counter, setCounter] = useState(10);

    useEffect(()=>{
    const interval = setInterval(() => {
      setCounter((prev)=>{
        if(prev === 0) {
            document.body.style.backgroundColor = hexadecimalGenerator(); 
            return 10;
        }

        return prev - 1;
      });
    }, 1000);

    return () => {
        document.body.style.backgroundColor = "#212121";
        clearInterval(interval)
    };
    }, []);

  return (
    <div>
        <span className="counter">{counter}</span>
    </div>
  );
}

export default CircleFive;