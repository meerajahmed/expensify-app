import expenseReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

//Test default state, to make sure the reducers are set up correctly
test("should set up default expense state", () => {
  const state = expenseReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const state = expenseReducer(expenses, {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  });
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id is not found", () => {
  const state = expenseReducer(expenses, {
    type: "REMOVE_EXPENSE",
    id: "-1"
  });
  expect(state).toEqual(expenses);
});

test("should add expense", () => {
  const expense = {
    id: "4"
  };
  const state = expenseReducer(expenses, {
    type: "ADD_EXPENSE",
    expense
  });
  expect(state).toEqual([...expenses, expense]);
});

test("should edit expense", () => {
  const amount = 109000;

  const state = expenseReducer(expenses, {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: {
      amount
    }
  });
  expect(state[1].amount).toBe(amount);
});

test("should not edit expense if id is not found", () => {
  const amount = 109000;
  const state = expenseReducer(expenses, {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: {
      amount
    }
  });
  expect(state).toEqual(expenses);
});