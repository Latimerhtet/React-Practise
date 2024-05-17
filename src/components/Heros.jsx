import React, { useState } from "react";
import Hero from "./Hero";
import characters from "../heros";
import "../index.css";
const Heros = () => {
  const [count, setCount] = useState(1);

  const showNext = () => {
    if (count < 6) {
      setCount(count + 1);
    }
  };
  const showPrevious = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className="subContainer">
      <Hero
        key={characters[count].id}
        characterName={characters[count].characterName}
        img={characters[count].img}
        detail={characters[count].detail}
      />
      <div className="btnContainer">
        <button onClick={showPrevious}>Previous</button>
        <button onClick={showNext}>Next</button>
      </div>
    </div>
  );
};

export default Heros;
