import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartReducer } from "../reducers/cartReducers";
import { BiPlus, BiMinus } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import { addToCart } from "../actions/cartActions";
import { deleteFromCart } from "../actions/cartActions";
import { getUserCart } from "../actions/cartActions";
import { toast } from "react-toastify";
import Payment from "../components/Payment";

function CartPage() {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  var subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserCart(currentUser?.email));
  },[]);

  return (
    <div className="cartDiv">
      <div className="cartDivInner">
        <h1 className="cartHeading">My Cart</h1>
        {currentUser.name ? (
          cartItems.map((item) => {
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
                            currentUser?.email,
                            item,
                            item.varient,
                            item.quantity + 1
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
                            currentUser?.email,
                            item,
                            item.varient,
                            item.quantity - 1
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
                      dispatch(deleteFromCart(currentUser?.email, item));
                    }}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <h1 style={{ marginTop: "280px" }}>
            Please{" "}
            <a style={{ color: "orangered" }} href="/login">
              Login
            </a>{" "}
            to Continue
          </h1>
        )}
      </div>
      {currentUser.name &&
        (subtotal === 0 ? (
          <h1 style={{ marginTop: "30px" }}>{`Your cart is empty :(`}</h1>
        ) : (
          <div className="subTotalDivOuter flex-container justify-content-end">
            <div className="subTotalDiv">
              <h1 className="subTotalHead">SubTotal : Rs {subtotal}/-</h1>
            </div>
          </div>
        ))}
      {currentUser.name && subtotal > 0 && (
        <div className="flex-container justify-content-center">
          <Payment subtotal={subtotal} />
        </div>
      )}
    </div>
  );
}

export default CartPage;
