import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const alreadyExists = state.cartItems.find(
        //to check if item already exists or not
        (item) =>
          item._id === action.payload._id &&
          item.quantity === action.payload.quantity &&
          item.varient === action.payload.varient
      );
      const alreadyExistsButUpdate = state.cartItems.find(
        //to check if item already exists or not
        (item) => item._id === action.payload._id
      );
      // action.payload refers to the item we are trying to add
      if (alreadyExists) {
        // on clicking add to cart for an already existing product in the cart
        toast.error("Item already exists in Cart", {
          position: toast.POSITION.TOP_RIGHT,
        });
        return {
          ...state,
          cartError: true,
          cartItems: state.cartItems.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ),
        };
      } else if (!alreadyExists && alreadyExistsButUpdate) {
        toast.success("Item quantity/varient updated in Cart", {
          position: toast.POSITION.TOP_RIGHT,
        });
        return {
          ...state,
          cartError: true,
          cartItems: state.cartItems.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ),
        };
      } else {
        return {
          ...state,
          cartError: false,
          cartItems: [...state.cartItems, action.payload],
        };
      }

    case "DELETE_FROM_CART":
      return {
        ...state,
        cartError: false,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload._id
        ),
      };

    case "EMPTY_CART":
      return {
        ...state,
        cartError: false,
        cartItems: [],
      };

    default:
      return state;
  }
};
