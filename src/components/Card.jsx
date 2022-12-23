import React from "react";
import "../styles/card.css";

function Card({ subway }) {
  return (
    <div>
      <h1>
        <img
          src={subway.icon}
          alt="icon"
          style={{ height: "30px", width: "30px" }}
        />
        {subway.name}
      </h1>
      <img
        src={subway.image}
        alt="subway"
        className="img-fluid"
        style={{ height: "200px", width: "200px" }}
      />
      <div className="flex-container">
        <div className="w-100">
          <p>Varients: </p>
          <select>
            {subway.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className="w-100">
          <p>Quantity: </p>
          <select>
            {[...Array(10).keys()].map((x, i) => {
              //x is object i is index
              //The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Card;
