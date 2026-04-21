import { useRef, useState } from "react";
import { sentences } from "../utils/sentences";

function CircleThree() {
  const [message, setMessage] = useState("");
  const repeatInput = useRef(null);

  const handleButton = async () => {
    setTimeout(()=>{
      setMessage(sentences());
    }, 1000);
  }

  return (
    <div className="circleThree">
        {message && <div className="temporaryMessage">{message}</div>}
        <input type="text" className="repeatInput" placeholder="???" ref={repeatInput}/>
        <button className="echo-button" onClick={handleButton}>???</button>
    </div>
  );
}

export default CircleThree;




/**
 *   const handleButton = () => {
    setTimeout(()=>{
       setMessage(repeatInput.current.value);
       repeatInput.current.value = "";
    }, 2000);
  }
 */