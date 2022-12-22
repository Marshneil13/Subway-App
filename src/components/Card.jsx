import React from "react";
import "../styles/card.css";

function Card({ subway }) {
  return (
    <div>
      <h1>{subway.name}</h1>
    </div>
  );
}

export default Card;
