import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const registerUser = async (dispatch, user) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_HTTP_PROXY}api/users/register`,
      user
    );
    console.log(response);
    dispatch({ type: "USER_REGISTER_SUCCESS" });
    toast.success("You have registered successfully!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILED", payload: error });
    toast.error("Email already exists", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_HTTP_PROXY}api/users/login`,
      user
    );
    console.log("LOGIN RESPONSE", response.data);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem(
      "currentUser",
      JSON.stringify(response.data.currentUser)
    );
    localStorage.setItem("cartItems", JSON.stringify(response.data.cartItems));
    // window.location.href = "/";
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED", payload: error });
    console.log("Login Error", error);
    toast.error("Invalid Credentials", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  window.location.href = "/login";
};

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: "GET_ALL_USERS_REQUEST" });

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_HTTP_PROXY}api/users/getallusers`
    );
    console.log("RESPONSE", response);
    dispatch({ type: "GET_ALL_USERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_ALL_USERS_FAILED", payload: error });
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  dispatch({ type: "DELETE_USER_REQUEST" });
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_HTTP_PROXY}api/users/deleteuser`,
      {
        userId,
      }
    );
    console.log("User deleted successfully", response);
    dispatch({ type: "DELETE_USER_SUCCESS" });
    toast.success("User deleted successfully", {
      position: toast.POSITION.TOP_RIGHT,
    });
    window.location.reload();
  } catch (error) {
    dispatch({ type: "DELETE_USER_FAILED", payload: error });
    console.log("Failed to delete user", error);
    toast.error("Failed to delete user", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};
