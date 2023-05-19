import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    const response = await axios.post("/api/subways/addsubway", { subway });
    console.log("Added Subway Successfully", response);
    toast.success("Added Subway Successfully", {
      position: toast.POSITION.TOP_RIGHT,
    });
    dispatch({ type: "ADD_SUBWAY_SUCCESS" });
  } catch (error) {
    dispatch({ type: "ADD_SUBWAY_FAILED", payload: error });
    console.log("Failed to add subway", error);
    toast.error("Failed to Add Subway", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export const getSubwayById = (subwayId) => async (dispatch) => {
  dispatch({ type: "GET_SUBWAY_BY_ID_REQUEST" });

  try {
    const response = await axios.post("/api/subways/getsubwaybyid", {
      subwayId,
    });
    console.log("RESPONSE", response);
    dispatch({ type: "GET_SUBWAY_BY_ID_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_SUBWAY_BY_ID_FAILED", payload: error });
  }
};

export const editSubway = (editedSubway) => async (dispatch) => {
  dispatch({ type: "EDIT_SUBWAY_REQUEST" });
  try {
    const response = await axios.post("/api/subways/editsubway", {
      editedSubway,
    });
    console.log("Updated Subway Successfully", response);
    toast.success("Updated Subway Successfully", {
      position: toast.POSITION.TOP_RIGHT,
    });
    dispatch({ type: "EDIT_SUBWAY_SUCCESS" });
    // window.location.href = "/admin/subwaylist";
  } catch (error) {
    dispatch({ type: "EDIT_SUBWAY_FAILED", payload: error });
    console.log("Failed to edit subway", error);
    toast.error("Failed to Edit Subway", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export const deleteSubway = (subwayId) => async (dispatch) => {
  dispatch({ type: "DELETE_SUBWAY_REQUEST" });
  try {
    const response = await axios.post("/api/subways/deletesubway", {
      subwayId,
    });
    console.log("Subway deleted successfully", response);
    dispatch({ type: "DELETE_SUBWAY_SUCCESS" });
    toast.success(`Subway deleted successfully`, {
      position: toast.POSITION.TOP_RIGHT,
    });
    window.location.reload();
  } catch (error) {
    dispatch({ type: "DELETE_SUBWAY_FAILED", payload: error });
    console.log("Failed to delete subway", error);
    toast.error("Failed to Delete Subway", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};
