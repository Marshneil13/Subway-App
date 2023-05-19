import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../components/Error";
import Success from "../../components/Success";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
import { deleteSubway, getAllSubways } from "../../actions/subwayActions";
import { FaTrashAlt } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";

function SubwayList() {
  const dispatch = useDispatch();
  const subwayState = useSelector((state) => state.getAllSubwaysReducers);
  const deleteSubwayState = useSelector((state) => state.deleteSubwayReducers);

  const { subways, error, loading } = subwayState;
  const { deleteSuccess, deleteError } = deleteSubwayState;

  useEffect(() => {
    dispatch(getAllSubways());
  }, [dispatch]);

  function handleDelete(subwayId) {
    console.log("Delete", subwayId);
    dispatch(deleteSubway(subwayId));
  }
  return (
    <div className="admin col-md-10" style={{ marginBottom: "90px" }}>
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
      <h2 style={{ fontSize: "30px" }} className="adminHead">
        Subway List
      </h2>
      {loading && <Loader />}
      {error && <Error error="Something went wrong" />}
      {deleteSuccess && <Success success={"Successfully removed subway"} />}
      {deleteError && <Error error={"Failed to remove subway"} />}
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Prices</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {subways &&
            subways.map((subway) => {
              return (
                <tr>
                  <td>{subway.name}</td>
                  <td>
                    Six Inch : {subway.prices[0]["six inch"]} <br />
                    Foot-long : {subway.prices[0]["foot-long"]}
                  </td>
                  <td className={subway.category === "veg" ? "green" : "red"}>
                    {subway.category}
                  </td>
                  <td>
                    <i className="fa-icon">
                      <FaTrashAlt
                        onClick={() => {
                          handleDelete(subway._id);
                        }}
                      />
                    </i>
                    <Link to={`/admin/editsubway/${subway._id}`}>
                      <i className="fa-icon">
                        <GrEdit />
                      </i>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default SubwayList;
