import { state } from "../data/location";

export const registerUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      return {
        loading: true,
      };
    case "USER_REGISTER_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "USER_REGISTER_FAILED":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

//currentUser is an object hence we need not create it, if it is an array then we need to
export const loginUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return {
        loading: true,
      };
    case "USER_LOGIN_SUCCESS":
      console.log("Action", action);
      const { currentUser, cartItems } = action.payload;
      console.log("Payload Current USer", currentUser);
      return {
        loading: false,
        success: true,
        currentUser: currentUser,
        cartItems: cartItems,
        error: false,
      };
    case "USER_LOGIN_FAILED":
      return {
        loading: false,
        error: action.payload,
        currentUser: {},
      };

    default:
      return state;
  }
};

export const getAllUsersReducers = (state = { users: [] }, action) => {
  switch (action.type) {
    case "GET_ALL_USERS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_ALL_USERS_SUCCESS":
      return {
        loading: false,
        users: action.payload,
      };
    case "GET_ALL_USERS_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const deleteUserReducers = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_USER_REQUEST":
      return {
        deleteLoading: true,
        ...state,
      };
    case "DELETE_USER_SUCCESS":
      return {
        deleteLoading: false,
        deleteSuccess: true,
      };
    case "DELETE_USER_FAILED":
      return {
        deleteLoading: false,
        deleteError: action.payload,
      };
    default:
      return state;
  }
};
