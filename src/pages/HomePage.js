import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//The useDispatch hook allows you to dispatch actions from
//any component that is a descendent of the <Provider> component

//The useSelector hook takes a selector function to select data from the store and another function equalityFn
//to compare them before returning the results and determine when to render if the data from the previous and current state are different.
// useSelector hook used to get data from the reducer
import Card from "../components/Card";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { getAllSubways } from "../actions/subwayActions";
import Filter from "../components/Filter";

function HomePage() {
  //dispatch actions from the component
  const dispatch = useDispatch();
  const subwayState = useSelector((state) => state.getAllSubwaysReducers);
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const { cartError } = cartState;

  const { subways, error, loading } = subwayState;

  useEffect(() => {
    dispatch(getAllSubways());
  }, []);
  return (
    <div style={{ marginBottom: "60px" }}>
      {cartError && <Error />}
      <Filter />
      <div className="row justify-content-center">
        {/* conditional rendering */}
        {loading ? (
          <Loader />
        ) : error ? (
          <Error error="Oops! Something went wrong" />
        ) : (
          subways.map((subway) => {
            return (
              <div className="col-md-3 m-5" key={subway._id}>
                {/* Each child in a list should have a unique "key" prop. */}
                <Card email={currentUser?.email} subway={subway} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default HomePage;
