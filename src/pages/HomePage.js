import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//The useDispatch hook allows you to dispatch actions from
//any component that is a descendent of the <Provider> component

//The useSelector hook takes a selector function to select data from the store and another function equalityFn
//to compare them before returning the results and determine when to render if the data from the previous and current state are different.
import Card from "../components/Card";
import subways from "../json/subwayData";
import { getAllSubways } from "../actions/subwayActions";

function HomePage() {
  //dispatch actions from the component
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSubways());
  }, []);
  return (
    <div>
      <div className="row">
        {subways.map((subway) => {
          return (
            <div className="col-md-4">
              <Card subway={subway} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
