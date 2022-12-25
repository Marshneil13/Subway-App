import React from "react";
import { useState } from "react";
import "../styles/card.css";

function Card({ subway }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("six inch");
  return (
    <div style={{ margin: "70px 120px" }} className="card-div">
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
        <div className="w-100 m-1">
          <p>Varients: </p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => {
              setVarient(e.target.value);
            }}
          >
            {subway.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity: </p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              //x is object i is index
              //The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-1 w-100 pb-1">
          <h1 className="mt-1">
            Price : {subway.prices[0][varient] * quantity} Rs/-
          </h1>
        </div>
        <div className="m-1 w-100 pb-1">
          <button className="btn">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
