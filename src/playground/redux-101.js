import { createStore } from "redux";

const defaultState = {
  count: 0
};

/**
 * store: tracks data/state over time
 * */

const store = createStore((state = defaultState) => {
  return state;
});

console.log(store.getState());