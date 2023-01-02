export const getAllSubwaysReducers = (state = {}, action) => {
  switch (action.type) {
    case "GET_SUBWAYS_REQUEST":
      return { ...state };
    case "GET_SUBWAYS_SUCCESS":
      return {
        subways: action.payload,
      };
    case "GET_SUBWAYS_FAILED":
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

// action.payload refers to the value returned in response to that action
