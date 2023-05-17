import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUsers } from "../../actions/userActions";
import { FaTrashAlt } from "react-icons/fa";

const UsersList = () => {
  const dispatch = useDispatch();
  const getAllUsersState = useSelector((state) => state.getAllUsersReducers);
  const deleteUserState = useSelector((state) => state.deleteUserReducers);

  const { error, loading, users } = getAllUsersState;
  const { deleteLoading, deleteSuccess, deleteError } = deleteUserState;
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

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
        UsersList
      </h1>
      {loading && <Loader />}
      {error && <Error error={"Something went wrong"} />}
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <i className="fa-icon">
                      <FaTrashAlt
                        onClick={() => {
                          dispatch(deleteUser(user._id));
                        }}
                      />
                    </i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
