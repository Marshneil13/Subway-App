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

export const filterSubways = (searchKey, category) => async (dispatch) => {
  var filteredSubways;
  dispatch({ type: "GET_SUBWAYS_REQUEST" });

  try {
    const response = await axios.get("/api/subways/getallsubways");
    filteredSubways = response.data.filter((sub) =>
      sub.name.toLowerCase().includes(searchKey.toLowerCase())
    );

    if (category !== "all") {
      filteredSubways = filteredSubways.filter(
        (sub) => sub.category.toLowerCase() === category
      );
    }
    dispatch({ type: "GET_SUBWAYS_SUCCESS", payload: filteredSubways });
  } catch (error) {
    dispatch({ type: "GET_SUBWAYS_FAILED", payload: error });
  }
};

export const addSubway = (subway) => async (dispatch) => {
  dispatch({ type: "ADD_SUBWAY_REQUEST" });
  try {
    const response = await axios.post("/api/subways/addsubways", { subway });
    console.log("Added Subway Successfully", response);
    dispatch({ type: "ADD_SUBWAY_SUCCESS" });
  } catch (error) {
    dispatch({ type: "ADD_SUBWAY_FAILED", payload: error });
    console.log("Failed to add subway", error);
  }
};
