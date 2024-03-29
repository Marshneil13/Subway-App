import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterSubways } from "../actions/subwayActions";

const Filter = () => {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState("");
  const [category, setCategory] = useState("all");
  return (
    <div style={{ width: "80vw", marginLeft: "180px" }}>
      <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
        <div className="col-md-3 w-100">
          <input
            onChange={(e) => {
              setSearchKey(e.target.value);
            }}
            value={searchKey}
            type="text"
            className="form-control w-100"
            placeholder="search subways"
          />
        </div>
        <div className="col-md-3 w-100 mt-2">
          <select
            className="form-control w-100"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="veg">Veg</option>
            <option value="nonveg">Non Veg</option>
          </select>
        </div>
        <div className="col-md-3 w-100 mt-2">
          <button
            className="btn w-100"
            onClick={() => {
              dispatch(filterSubways(searchKey, category));
              //inline functions should always be arrow functions
            }}
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
