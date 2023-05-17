import axios from "axios";
export const registerUser = async (dispatch, user) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });

  try {
    const response = await axios.post("/api/users/register", user);
    console.log(response);
    dispatch({ type: "USER_REGISTER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILED", payload: error });
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });

  try {
    const response = await axios.post("/api/users/login", user);
    console.log(response);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED", payload: error });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  window.location.href = "/login";
};

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: "GET_ALL_USERS_REQUEST" });

  try {
    const response = await axios.get("/api/users/getallusers");
    console.log("RESPONSE", response);
    dispatch({ type: "GET_ALL_USERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_ALL_USERS_FAILED", payload: error });
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  dispatch({ type: "DELETE_USER_REQUEST" });
  try {
    const response = await axios.post("/api/users/deleteuser", {
      userId,
    });
    console.log("User deleted successfully", response);
    dispatch({ type: "DELETE_USER_SUCCESS" });
    window.location.reload();
  } catch (error) {
    dispatch({ type: "DELETE_USER_FAILED", payload: error });
    console.log("Failed to delete user", error);
  }
};

export const updateUserCart = (cartItems, userId) => async (dispatch) => {
  try {
    const response = await axios.post("/api/users/updateusercart", {
      cartItems,
      userId,
    });
    console.log("Updated user cart successfully", response);
  } catch (error) {
    console.log("Failed to update user cart");
  }
};

export const getUserCart = (userId) => async (dispatch) => {
  dispatch({ type: "GET_USER_CART_REQUEST" });
  try {
    const response = await axios.get(`/api/users/getusercart/${userId}`);
    console.log("USER CART", response);
    dispatch({ type: "GET_USER_CART_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_USER_CART_FAILED", payload: error });
  }
};
