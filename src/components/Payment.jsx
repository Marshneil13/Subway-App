import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderActions";
import { useState } from "react";
import Error from "./Error";
import Loader from "./Loader";
import Success from "./Success";
import { cartReducer } from "../reducers/cartReducers";
import { cities } from "../data/location";
import { emptyCart } from "../actions/cartActions";

function Payment({ subtotal }) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const [name, setName] = useState(currentUser.name);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;

  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  console.log("PAYMENT ITEMS", cartItems);
  const dispatch = useDispatch();
  console.log("CITIES", city);
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(placeOrder(subtotal, name, address, city, pincode));
    window.location.href = "/ordersuccess";
    dispatch(emptyCart(currentUser?.email));
  }
  return (
    <div>
      {loading && <Loader />}
      {error && <Error error="Something went wrong" />}
      {success && <Success success="Your Order Placed Successfully" />}

      <button
        className="btn-lg"
        style={{
          backgroundColor: "orangered",
          border: "none",
          color: "white",
        }}
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Proceed to Buy
      </button>

      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="exampleModalLongTitle">
                Place your Order
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <h5 style={{ color: "orangered" }}>Details</h5>
                <input
                  className="form-control"
                  required
                  type="text"
                  placeholder="customer's name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <input
                  className="form-control"
                  required
                  type="text"
                  placeholder="street address"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
                <div className="form-group paymentForm">
                  <select
                    className="form-control"
                    required
                    style={{ width: "225px", marginTop: "10px" }}
                    id="exampleFormControlSelect1"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  >
                    <option defaultValue={"city"} disabled>
                      city
                    </option>
                    {cities.map((item) => {
                      return <option>{item.name}</option>;
                    })}
                  </select>
                  <input
                    className="form-control"
                    required
                    style={{ width: "225px" }}
                    type="text"
                    placeholder="pincode"
                    value={pincode}
                    onChange={(e) => {
                      setPincode(e.target.value);
                    }}
                  />
                </div>
                <h5 style={{ color: "orangered", marginTop: "20px" }}>Items</h5>
                <div style={{ borderBottom: "1px solid black" }}>
                  {cartItems.map((item) => {
                    return (
                      <div className="paymentDiv">
                        <h6
                          style={{
                            padding: "5px",
                            textAlign: "left",
                            width: "230px",
                          }}
                        >
                          {item.name}
                        </h6>
                        <p
                          style={{ padding: "5px" }}
                        >{`${item.quantity} X ${item.price}`}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="paymentDiv">
                  <h5
                    style={{
                      padding: "5px",
                      textAlign: "left",
                      width: "230px",
                      color: "orangered",
                    }}
                  >
                    Order Amount
                  </h5>
                  <h5>{subtotal}</h5>
                </div>
                <div>
                  <h6 style={{ marginTop: "20px", fontSize: "18px" }}>
                    <span style={{ color: "orangered" }}>Payment Method:</span>{" "}
                    Cash on Delivery
                  </h6>
                  <h6
                    style={{ marginTop: "30px" }}
                  >{`*Currently we are only accepting COD. Online payment coming soon!`}</h6>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn">
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
