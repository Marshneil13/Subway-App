import React from "react";
import orderSuccess from "../assets/OrderPlacedIcon.png";
import { BsFillAlarmFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div>
      <h3 className="green">Order Placed!</h3>
      <div>
        <img
          src={orderSuccess}
          alt="Order Success"
          style={{ height: "400px", width: "400px" }}
        />
      </div>
      <h1 style={{ margin: "30px" }}>
        Your Subway is being prepared. We will be at your doorstep in some time{" "}
        <BsFillAlarmFill
          style={{
            color: "orangered",
            height: "25px",
            width: "25px",
            marginBottom: "5px",
          }}
        />
      </h1>
      <div className="orderSuccessDiv">
        <Link to="/">
          <button className="btn" style={{ fontSize: "18px" }}>
            Continue Shopping
          </button>
        </Link>
        <Link to="/orders">
          <button className="btnNew" style={{ fontSize: "18px" }}>
            View Order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
