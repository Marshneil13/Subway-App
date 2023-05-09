import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/orderActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
const OrdersPage = () => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.getUserOrdersReducer);
  const { orders, error, loading } = orderState;

  useEffect(() => {
    dispatch(getUserOrders());
  }, []);
  return (
    <div>
      <h2 style={{ fontSize: "35px" }}>My Orders</h2>
      <div className="row justify-content-center">
        {loading && <Loader />}
        {error && <Error />}
        {orders &&
          orders.map((order) => {
            return (
              <div
                className="col-md-8"
                style={{ backgroundColor: "#e3e3e3", color: "#d63e01" }}
              >
                <div className="flex-container">
                  <div className="text-left w-100 m-1">
                    <h3 style={{ fontSize: "20px", color: "black" }}>Items</h3>
                    <hr />
                    {order.orderItems.map((item) => {
                      return (
                        <div>
                          <p>
                            {item.name} [{item.varient}] * {item.quantity} ={" "}
                            {item.price}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-left w-100 m-1">
                    <h3 style={{ fontSize: "20px", color: "black" }}>
                      Address
                    </h3>
                    <hr />
                    <p>Street : {order.shippingAddress.street}</p>
                    <p>City : {order.shippingAddress.city}</p>
                    <p>Country : {order.shippingAddress.country}</p>
                    <p>Pincode : {order.shippingAddress.pincode}</p>
                  </div>
                  <div className="text-left w-100 m-1">
                    <h3 style={{ fontSize: "20px", color: "black" }}>
                      Order Info
                    </h3>
                    <hr />
                    <p>Order Amount : {order.orderAmount}</p>
                    <p>Date : {order.createdAt.substring(0, 10)}</p>
                    <p>Payment Status : {order.paymentStatus}</p>
                    <p>Order Id : {order._id}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default OrdersPage;
