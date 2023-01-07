import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartReducer } from "../reducers/cartReducers";

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
            <div className="flex-container">
              <div>
                <h1>{item.name}</h1>
                <h1>
                  Price: {item.quantity} * {item.prices[0][item.varient]} ={" "}
                  {item.price}
                </h1>
              </div>
              <div></div>
              <div></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartPage;
