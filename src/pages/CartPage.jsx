import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartReducer } from "../reducers/cartReducers";
import { BiPlus, BiMinus } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import { addToCart } from "../actions/cartActions";
import { deleteFromCart } from "../actions/cartActions";

function CartPage() {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  //   console.log("CARTiTEMS", cartItems);
  return (
    <div className="cartDiv">
      <div className="cartDivInner">
        <h1 className="cartHeading">My Cart</h1>
        {cartItems.map((item) => {
          return (
            <div className="flexOuterDiv">
              <div className="flexDiv m-1 w-100">
                <h1>
                  <span style={{ color: "orangered" }}>{item.name}</span> [
                  {item.varient}]
                </h1>
                <h1>
                  Price: {item.quantity} * {item.prices[0][item.varient]} ={" "}
                  {item.price}
                </h1>
                <h1>
                  Quantity:{" "}
                  <BiPlus
                    className="plusIcon"
                    onClick={() => {
                      dispatch(
                        addToCart(
                          item,
                          item.varient,
                          parseInt(item.quantity) + 1
                        )
                      );
                    }}
                  />{" "}
                  <b>{item.quantity}</b>{" "}
                  <BiMinus
                    className="minusIcon"
                    onClick={() => {
                      dispatch(
                        addToCart(
                          item,
                          item.varient,
                          parseInt(item.quantity) - 1
                        )
                      );
                    }}
                  />
                </h1>
              </div>
              <div className="imgDiv">
                <img
                  className="subwayImg"
                  src={item.image}
                  alt="subway"
                  style={{ height: "130px", width: "130px" }}
                />
                <FaTrashAlt
                  className="trashIcon"
                  onClick={() => {
                    dispatch(deleteFromCart(item));
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartPage;
