import { createStore, combineReducers } from "redux";

/*
* ADD_EXPENSE
* REMOVE_EXPENSE
* EDIT_EXPENSE
*
* SET_TEXT_FILTER
* SROT_BY_DATE
* SORT_BY_AMOUNT
* SET_START_DATE
* SET+END_DATE
* */

// expense reducer
const expenseReducerDefaultState = [];

const expenseReducer = ( state = expenseReducerDefaultState, action ) => {
  switch (action.type) {

    default:
      return state;
  }
};

// filter reducers
const filterReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const filterReducer = ( state = filterReducerDefaultState, action ) => {
  switch (action.type) {

    default:
      return state;
  }
};


// Store creation
const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
  })
);
console.log(store.getState());

const demoState = {
  expenses: [{
    id: 'qwerty',
    description: "January Rent",
    note: "This was the final payment for that address",
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined
  }
};