import React from "react";
import { useState } from "react";
import "../index.css";
const Hero = (props) => {
  const [showDetail, setShowDetail] = useState(false);
  const handleShowDetail = () => {
    setShowDetail(!showDetail);
  };
  return (
    <div className="heroContainer">
      <h1 className="name">{props.characterName}</h1>
      <button onClick={handleShowDetail}>Details</button>
      {showDetail && (
        <div className="detailContainer">
          <p>{props.detail}</p>
          <button onClick={handleShowDetail}>Close</button>
        </div>
      )}
      <img src={props.img} className="characterImg" />
    </div>
  );
};

export default Hero;
