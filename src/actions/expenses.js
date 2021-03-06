import database from "../firebase/firebase";

// ADD_EXPENSE

/*export const addExpense =
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
  );*/

export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    // set default value
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;

    const expense = { description, note, amount, createdAt };
    return database.ref("expense").push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  }
};

// REMOVE_EXPENSE

export const removeExpense = ({id} = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

// EDIT_EXPENSE

export const updateExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

// SET_EXPENSES

export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses
});

export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref("expenses")
      .once()
      .then((snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setExpenses(expenses));
      });
  }
};