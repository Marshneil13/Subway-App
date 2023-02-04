import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import { placeOrder } from "../actions/orderActions";

const myPublishableKey = process.env.STRIPE_KEY;

function Payment({ subtotal }) {
  const dispatch = useDispatch();
  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
  }
  return (
    <div>
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
