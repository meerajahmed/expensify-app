import { removeExpense, updateExpense, addExpense } from "../../actions/expenses";

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

test("should setup add expense action object with provided value", () => {
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
});

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
});