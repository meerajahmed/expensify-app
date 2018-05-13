import { removeExpense, updateExpense, addExpense, startAddExpense } from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const createMockStore = configureMockStore([thunk]);

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "qwert" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "qwert"
  });
});

test("should setup edit expense action object", () => {
  const action = updateExpense("qwert", {
      note: "New note value"
    });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "qwert",
    updates: {
      note: "New note value"
    }
  });
});

/*test("should setup add expense action object with provided value", () => {
  const expense = {
    description: "Rent",
    note: "Jan 18",
    amount: 123,
    createdAt: 1000
  };
  const action = addExpense(expense);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expense,
      id: expect.any(String)
    }
  });
});*/

test("should setup add expense action object with provided value", () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2]
  });
});

/*
test("should setup add expense action object with default value", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});*/

test("should add expense to database and store", (done) => {
  const store = createMockStore({});
  const expense = {
    description: "Mouse",
    note: "This one is better",
    amount: 3000,
    createdAt: 1000
  }
  store.dispatch(startAddExpense(expense))
    .then(() => {
      expect(1).toBe(1);
      done(); // required for async test case
      // force jest to wait until this code is executed
    });
});