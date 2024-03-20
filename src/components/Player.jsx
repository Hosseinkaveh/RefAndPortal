import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const [playerName,setPlayerName] = useState('')
  const name = useRef('')
  function handelChangeName(){
    setPlayerName(name.current.value)
    name.current.value = ''
  }
  return (
    <section id="player">
      <h2>Welcome {playerName?playerName:'unknown entity'}</h2>
      <p>
        <input type="text"  ref={name}/>
        <button onClick={handelChangeName}>Set Name</button>
      </p>
    </section>
  );
}
