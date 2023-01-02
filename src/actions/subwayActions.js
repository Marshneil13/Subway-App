import axios from "axios";
export const getAllSubways = () => (dispatch) => {
  dispatch({ type: "GET_SUBWAYS_REQUEST" });

  try {
    const response = axios.get("/api/subways/getsubways");
    console.log("RESPONSE", response);
    dispatch({ type: "GET_SUBWAYS_SUCCESS" });
  } catch (error) {
    dispatch({ type: "GET_SUBWAYS_FAILED" });
  }
};
//getAllSubways is the action name followed by the dispatch function
//whenever the getAllSubways function is called, the GET_SUBWAYS_REQUEST will be sent to the reducer
