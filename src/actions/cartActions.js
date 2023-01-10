import { toast } from "react-toastify";

export const addToCart =
  (subway, varient, quantity) => (dispatch, getState) => {
    var cartItem = {
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

    if (cartItem.quantity > 10) {
      alert("Maximum quantity is 10");
    } else if (cartItem.quantity < 1) {
      dispatch({ type: "DELETE_FROM_CART", payload: subway });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
    }

    //getState used to get the variables and reducers from the store
    const cartItems = getState().cartReducer.cartItems;
    //setting data in the local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

export const deleteFromCart = (subway) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: subway });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
