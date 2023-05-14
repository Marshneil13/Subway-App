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

export const addSubwayReducers = (state = {}, action) => {
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

export const getSubwayByIdReducers = (state = {}, action) => {
  switch (action.type) {
    case "GET_SUBWAY_BY_ID_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_SUBWAY_BY_ID_SUCCESS":
      return {
        loading: false,
        subway: action.payload,
      };
    case "GET_SUBWAY_BY_ID_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const editSubwayReducers = (state = {}, action) => {
  switch (action.type) {
    case "EDIT_SUBWAY_REQUEST":
      return {
        editLoading: true,
        ...state,
      };
    case "EDIT_SUBWAY_SUCCESS":
      return {
        editLoading: false,
        editSuccess: true,
      };
    case "EDIT_SUBWAY_FAILED":
      return {
        editLoading: false,
        editError: action.payload,
      };
    default:
      return state;
  }
};

export const deleteSubwayReducers = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_SUBWAY_REQUEST":
      return {
        deleteLoading: true,
        ...state,
      };
    case "ADD_SUBWAY_SUCCESS":
      return {
        deleteLoading: false,
        deleteSuccess: true,
      };
    case "ADD_SUBWAY_FAILED":
      return {
        deleteLoading: false,
        deleteError: action.payload,
      };
    default:
      return state;
  }
};
