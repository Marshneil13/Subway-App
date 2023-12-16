import axios from "axios";

export const addToCart =
  (email, subway, varient, quantity) => async (dispatch, getState) => {
    var Item = {
      name: subway.name,
      _id: subway._id,
      image: subway.image,
      varient: varient,
      quantity: Number(quantity),
      prices: subway.prices,
      price: subway.prices[0][varient] * quantity,
      // price is the cost of the selected item
      // prices is the Array in which we have the price for that particular varient
      // so that we can easily change the quantity of the selected item
    };

    if (Item.quantity > 10) {
      alert("Maximum quantity is 10");
    } else if (Item.quantity < 1) {
      dispatch({ type: "DELETE_FROM_CART", payload: subway });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: Item });
    }

    //getState used to get the variables and reducers from the store
    const cartItems = getState().cartReducer.cartItems;
    const response = await axios.post(
      `${process.env.REACT_APP_HTTP_PROXY}api/cart/updateusercart`,
      {
        cartItems: cartItems,
        userEmail: email,
      }
    );
    //setting data in the local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

export const deleteFromCart = (email, subway) => async (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: subway });
  const cartItems = getState().cartReducer.cartItems;
  const response = await axios.post(
    `${process.env.REACT_APP_HTTP_PROXY}api/cart/updateusercart`,
    {
      cartItems: cartItems,
      userEmail: email,
    }
  );
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const emptyCart = (email) => async (dispatch, getState) => {
  dispatch({ type: "EMPTY_CART" });
  const cartItems = getState().cartReducer.cartItems;
  const response = await axios.post(
    `${process.env.REACT_APP_HTTP_PROXY}api/cart/updateusercart`,
    {
      cartItems: cartItems,
      userEmail: email,
    }
  );
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const getUserCart = (userEmail) => async (dispatch) => {
  dispatch({ type: "GET_USER_CART_REQUEST" });
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_HTTP_PROXY}api/cart/getusercart`,
      {
        userEmail,
      }
    );
    console.log("RESPONSE", response);
    dispatch({ type: "GET_USER_CART_SUCCESS", payload: response.data });
    localStorage.setItem("cartItems", JSON.stringify(response.data));
  } catch (error) {
    dispatch({ type: "GET_USER_CART_FAILED", payload: error });
  }
};
