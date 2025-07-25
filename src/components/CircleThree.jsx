import { useRef, useState } from "react";

function CircleThree() {
  const [message, setMessage] = useState("");
  const repeatInput = useRef(null);

  const handleButton = () => {
    setTimeout(()=>{
       setMessage(repeatInput.current.value);
       repeatInput.current.value = "";
    }, 2000);
  }

  return (
    <div className="circleThree">
        {message && <marquee className="temporaryMessage">{message}</marquee>}
        <input type="text" className="repeatInput" placeholder="???" ref={repeatInput}/>
        <button className="echo-button" onClick={handleButton}>???</button>
    </div>
  );
}

export default CircleThree;
