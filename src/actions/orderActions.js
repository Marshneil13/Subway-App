import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { type } from "os";
export const placeOrder =
  (subtotal, name, address, city, pincode) => async (dispatch, getState) => {
    //in the above line we will also need currentUser and cart items but we will get it from their respective reducers
    dispatch({ type: "PLACE_ORDER_REQUEST" });
    const currentUser = getState().loginUserReducer.currentUser;
    const cartItems = getState().cartReducer.cartItems;
    try {
      const response = await axios.post("/api/orders/placeorder", {
        subtotal,
        name,
        address,
        city,
        pincode,
        currentUser,
        cartItems,
      });
      dispatch({ type: "PLACE_ORDER_SUCCESS" });
      console.log("Placed order details", response);
    } catch (error) {
      dispatch({ type: "PLACE_ORDER_FAILED" });
      console.log(error);
    }
  };

export const getUserOrders = () => async (dispatch, getState) => {
  const currentUser = getState().loginUserReducer.currentUser;
  dispatch({ type: "GET_USER_ORDERS_REQUEST" });

  try {
    const response = await axios.post("/api/orders/getuserorders", {
      userId: currentUser._id,
    });
    console.log("RESPONSE", response);
    dispatch({ type: "GET_USER_ORDERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_USER_ORDERS_FAILED", payload: error });
  }
};

export const getAllOrders = () => async (dispatch, getState) => {
  dispatch({ type: "GET_ALL_ORDERS_REQUEST" });

  try {
    const response = await axios.get("/api/orders/getallorders");
    console.log("RESPONSE", response);
    dispatch({ type: "GET_ALL_ORDERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_ALL_ORDERS_FAILED", payload: error });
    toast.error("Failed to load Orders", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export const deliverOrder = (orderId) => async (dispatch) => {
  try {
    const response = await axios.post("/api/orders/deliverorder", { orderId });
    console.log("Delete Response", response);
    const orders = await axios.get("/api/orders/getallorders");
    dispatch({ type: "GET_ALL_ORDERS_SUCCESS", payload: orders.data });
  } catch (error) {
    console.log("Deletion Error", error);
  }
};
