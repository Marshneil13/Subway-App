import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//The useDispatch hook allows you to dispatch actions from
//any component that is a descendent of the <Provider> component

//The useSelector hook takes a selector function to select data from the store and another function equalityFn
//to compare them before returning the results and determine when to render if the data from the previous and current state are different.
// useSelector hook used to get data from the reducer
import Card from "../components/Card";
import Loader from "../components/Loader";
import { getAllSubways } from "../actions/subwayActions";

function HomePage() {
  //dispatch actions from the component
  const dispatch = useDispatch();
  const subwayState = useSelector((state) => state.getAllSubwaysReducers);

  const { subways, error, loading } = subwayState;

  useEffect(() => {
    dispatch(getAllSubways());
  }, []);
  return (
    <div>
      <div className="row justify-content-center">
        {/* conditional rendering */}
        {loading ? (
          <Loader />
        ) : error ? (
          <h1>Something went wrong</h1>
        ) : (
          subways.map((subway) => {
            return (
              <div className="col-md-3 m-5" key={subway._id}>
                {/* Each child in a list should have a unique "key" prop. */}
                <Card subway={subway} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default HomePage;
