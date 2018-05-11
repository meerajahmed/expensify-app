// expense reducer
const expenseReducerDefaultState = [];

export default ( state = expenseReducerDefaultState, action ) => {
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

    case "SET_EXPENSES":
      return action.expense;
      
    default:
      return state;
  }
};
