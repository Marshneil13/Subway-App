import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import Success from "../../components/Success";
import { useDispatch, useSelector } from "react-redux";
import { deliverOrder, getAllOrders } from "../../actions/orderActions";

function OrdersList() {
  const getAllOrdersState = useSelector((state) => state.getAllOrdersReducer);
  const { error, loading, orders } = getAllOrdersState;
  const reversedOrders = orders.map((item) => item).reverse();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  function deliver(orderId) {
    dispatch(deliverOrder(orderId));
  }

  return (
    <div className="admin col-md-10">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <h2 style={{ fontSize: "40px" }}>Admin Panel</h2>

          <ul className="adminFunctions">
            <li>
              <Link to="/admin/userslist">Users List</Link>
            </li>
            <li>
              <Link to="/admin/subwaylist">Subway List</Link>
            </li>
            <li>
              <Link to="/admin/addsubway">Add New Subway</Link>
            </li>
            <li>
              <Link to="/admin/orderslist">Orders List</Link>
            </li>
          </ul>
        </div>
      </div>
      <h1 style={{ fontSize: "30px" }} className="adminHead">
        OrdersList
      </h1>
      {error && <Error error={"Failed to load Orders"} />}
      {loading && <Loader />}
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Order Id</th>
            <th>User</th>
            <th>Email</th>
            <th>{`Amount (INR)`}</th>
            <th>Payment</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders &&
            reversedOrders.map((order) => {
              return (
                <tr>
                  <td>{order._id}</td>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.orderAmount}</td>
                  <td className={order.isDelivered ? "green" : "red"}>
                    {order.paymentStatus}
                  </td>
                  <td>{order.createdAt.split("T")[0]}</td>
                  <td>
                    {order.isDelivered ? (
                      <h1 style={{ fontSize: "17px" }}>Delivered</h1>
                    ) : (
                      <button
                        className="btn"
                        onClick={() => {
                          deliver(order._id);
                        }}
                      >
                        Deliver
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersList;
