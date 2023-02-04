import React from "react";
import StripeCheckout from "react-stripe-checkout";
const myPublishableKey = process.env.STRIPE_KEY;

function Payment({ subtotal }) {
  function tokenHandler(token) {
    console.log(token);
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
