import { createStore } from "redux";
import React from "react";

const defaultState = {
  count: 0
};

/**
 * Store: tracks data/state over time
 * Actions: allow us to change redux store
 * Subscribe: watch state changes
 * Action generators: functions that return action objects
 * */

/*const incrementCount = ( { incrementBy } = {} ) => ({
  type: "INCREMENT",
  incrementBy: typeof incrementBy === "number" ? incrementBy : 1
});*/
// replace ternary operator with default value of 1
const incrementCount = ( { incrementBy = 1 } = {} ) => ({
  type: "INCREMENT",
  incrementBy: incrementBy
});

const store = createStore((state = defaultState, action) => {
  switch(action.type){

    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };

    case "DECREMENT":
      const decrementBy = typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };

    case "RESET":
      return {
        count: 0
      };

    case "SET":
      return {
        count: action.count
      };

    default:
      return state;
  }
});

store.subscribe(() => {
  console.log(store.getState());
});


store.dispatch(incrementCount());

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch({
  type: "DECREMENT"
});

store.dispatch({
  type: "DECREMENT",
  decrementBy: 10
});

store.dispatch({
  type: "SET",
  count: 101
});

store.dispatch({
  type: "RESET"
});