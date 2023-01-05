//Add all the reducers in the store
import { combineReducers } from "redux";
// wrapped in curly braces because these are not default exports
// The combineReducers helper function turns an object whose values are different
// reducing functions into a single reducing function you can pass to createStore
import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
//Creates a Redux store that holds the complete state tree of your app. There should only be a single store in your app.
import thunk from "redux-thunk";
//Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux.
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllSubwaysReducers } from "./reducers/subwayReducers"; //this is the child reducer for the combineReducers
import { cartReducer } from "./reducers/cartReducers";

const finalReducer = combineReducers({
  getAllSubwaysReducers: getAllSubwaysReducers,
  cartReducer: cartReducer,
});

const initialState = {};
const composeEnhancers = composeWithDevTools({});
//The store enhancer. You may optionally specify it to enhance
//the store with third-party capabilities such as middleware, time travel, persistence, etc.
const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

//instead of compo..(applyMid..) we can simply use applyMiddleware(thunk)
//but to keep a track of all th redux states in Chrome, we use the redux-devtools extension with the help of these

export default store;
