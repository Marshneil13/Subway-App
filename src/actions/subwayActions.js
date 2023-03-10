import axios from "axios";
export const getAllSubways = () => async (dispatch) => {
  dispatch({ type: "GET_SUBWAYS_REQUEST" });

  try {
    const response = await axios.get("/api/subways/getallsubways");
    console.log("RESPONSE", response);
    dispatch({ type: "GET_SUBWAYS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_SUBWAYS_FAILED", payload: error });
  }
};
//getAllSubways is the action name followed by the dispatch function
//whenever the getAllSubways function is called, the GET_SUBWAYS_REQUEST will be sent to the reducer
