import { createStore } from "redux";

const defaultState = {
  count: 0
};

/**
 * Store: tracks data/state over time
 * Actions: allow us to change redux store
 * Subscribe: watch state changes
 * */

const store = createStore((state = defaultState, action) => {
  switch(action.type){

    case "INCREMENT":
      const incrementBy = typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
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


store.dispatch({
  type: "INCREMENT"
});

store.dispatch({
  type: "INCREMENT",
  incrementBy: 5
});

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