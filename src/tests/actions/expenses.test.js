import { removeExpense, updateExpense, addExpense, startAddExpense, setExpenses } from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({id, description, createdAt, note, amount}) => {
    expensesData[id] = { description, createdAt, note, amount };
  });
  database.ref("expenses").set(expensesData)
    .then(() => done());
});

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
  };

  store.dispatch(startAddExpense(expense))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expense
        }
      });
      //done(); // required for async test case
      // force jest to wait until this code is executed
    
      return database.ref(`expense/${actions[0].expense.id}`)
        .once("value");
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expense);
      done();
    });

}, 10000);

test("should add expense to database and store with default values", (done) => {
  const store = createMockStore({});
  const expense = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0
  };

  store.dispatch(startAddExpense(expense))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expense
        }
      });
      //done(); // required for async test case
      // force jest to wait until this code is executed
    
      return database.ref(`expense/${actions[0].expense.id}`)
        .once("value");
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expense);
      done();
    });

}, 10000);

test("should setup set expense action object with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses
  });
});