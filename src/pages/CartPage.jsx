import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartReducer } from "../reducers/cartReducers";
import { BiPlus, BiMinus } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";

function CartPage() {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  //   console.log("CARTiTEMS", cartItems);
  return (
    <div className="cartDiv">
      <div className="cartDivInner">
        <h1 className="cartHeading">My Cart</h1>
        {cartItems.map((item) => {
          return (
            <div className="flex-container flexOuterDiv">
              <div className="flexDiv m-1 w-100">
                <h1>
                  {item.name} [{item.varient}]
                </h1>
                <h1>
                  Price: {item.quantity} * {item.prices[0][item.varient]} ={" "}
                  {item.price}
                </h1>
                <h1>
                  Quantity: <BiPlus className="plusIcon" />{" "}
                  <b>{item.quantity}</b> <BiMinus className="minusIcon" />
                </h1>
              </div>
              <div className="m-10 w-100">
                <img
                  src={item.image}
                  alt="subway"
                  style={{ height: "100px", width: "100px" }}
                />
              </div>
              <div className="m-1 w-100">
                <FaTrashAlt className="trashIcon" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartPage;
