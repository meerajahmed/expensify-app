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
  incrementBy
});

const decrementCount = ( { decrementBy = 1} = {} ) => ({
  type: "DECREMENT",
  decrementBy
});

const setCount = ({ count }) => ({
  type: "SET",
  count
});

const resetCount = () => ({
  type: "RESET"
});

const countReducer = (state = defaultState, action) => {
  switch(action.type){

    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };

    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
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
};

const store = createStore( countReducer );

store.subscribe(() => {
  console.log(store.getState());
});


store.dispatch(incrementCount());

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10}));

store.dispatch(setCount({ count: 101}));

store.dispatch(resetCount());