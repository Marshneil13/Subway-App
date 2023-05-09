import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import AddSubway from "./Admin/AddSubway";
import OrdersList from "./Admin/OrdersList";
import SubwayList from "./Admin/SubwayList";
import UsersList from "./Admin/UsersList";

const AdminPage = () => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.to = "/";
    }
  }, []);
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>

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
    </div>
  );
};

export default AdminPage;
