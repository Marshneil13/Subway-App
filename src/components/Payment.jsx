import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderActions";
import Error from "./Error";
import Loader from "./Loader";
import Success from "./Success";
const myPublishableKey = process.env.REACT_APP_STRIPE_KEY;

function Payment({ subtotal }) {
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;
  const dispatch = useDispatch();
  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
  }
  return (
    <div>
      {loading && <Loader />}
      {error && <Error error="Something went wrong" />}
      {success && <Success success="Your Order Placed Successfully" />}
      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey={myPublishableKey}
        currency="INR"
      >
        <button
          className="btn-lg"
          style={{
            backgroundColor: "orangered",
            border: "none",
            color: "white",
          }}
        >
          Proceed to Pay
        </button>
      </StripeCheckout>
    </div>
  );
}

export default Payment;
