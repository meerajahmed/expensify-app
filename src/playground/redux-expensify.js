import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// ADD_EXPENSE

const addExpense =
  ({
     description = "",
     note = "",
     amount = 0,
     createdAt = 0
   } = {}) => (
    {
      type: "ADD_EXPENSE",
      expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
      }
    }
  );


// REMOVE_EXPENSE

const removeExpense = ({id} = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

// EDIT_EXPENSE

const updateExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate
});


// expense reducer
const expenseReducerDefaultState = [];

const expenseReducer = ( state = expenseReducerDefaultState, action ) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      // concat and return new array
      return [...state, action.expense];

    case "REMOVE_EXPENSE":
      return state.filter((expense) => expense.id !== action.id);

    case "EDIT_EXPENSE":
      return state.map(( expense ) => {
        if( expense.id === action.id ) {
          // merge and return new object
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      });
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
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };

    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
      };

    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };

    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };

    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };

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



store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: "Rent", amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: "Coffee", amount: 30 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

store.dispatch(updateExpense(expenseTwo.expense.id, { amount: 70 }));

store.dispatch(setTextFilter("rent"));
store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate()); // by default startDate = undefined

store.dispatch(setEndDate(1250));

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