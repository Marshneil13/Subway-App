import React from "react";
import { useState } from "react";
import "../styles/card.css";
import { Modal, Button, ModalDialog } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
// import closeButton from "react-bootstrap";
import { addToCart } from "../actions/cartActions";
function Card({ email, subway }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("six inch");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  function addToCartFunction() {
    dispatch(addToCart(email, subway, varient, quantity));
  }
  return (
    <div className="card-div">
      <div onClick={handleShow}>
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
      </div>
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
          <button className="btn" onClick={addToCartFunction}>
            ADD TO CART
          </button>
        </div>
      </div>

      <Modal show={show}>
        {/* <ModalDialog> */}
        <Modal.Header>
          <Modal.Title>{subway.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="modal-body">
            <div>
              <img
                src={subway.image}
                alt="subway"
                className="img-fluid"
                style={{ height: "300px", width: "300px" }}
              />
            </div>
            <div>
              <p>{subway.description}</p>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
        {/* </ModalDialog> */}
      </Modal>
    </div>
  );
}

export default Card;
