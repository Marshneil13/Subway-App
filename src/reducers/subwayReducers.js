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

export const AddSubwayReducers = (state = {}, action) => {
  switch (action.type) {
    case "ADD_SUBWAY_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "ADD_SUBWAY_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "ADD_SUBWAY_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
