export const getAllSubwaysReducers = (state = { subways: [] }, action) => {
  switch (action.type) {
    case "GET_SUBWAYS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_SUBWAYS_SUCCESS":
      return {
        loading: false,
        subways: action.payload,
      };
    case "GET_SUBWAYS_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// action.payload refers to the value returned in response to that action
