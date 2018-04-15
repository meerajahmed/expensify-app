import React from "react";
import {shallow} from "enzyme";
import {EditExpensePage} from "../../components/edit-expense-page";
import expenses from "../fixtures/expenses";

let wrapper, history, updateExpense, removeExpense;

beforeEach(() => {
  history = {
    push: jest.fn()
  };
  updateExpense = jest.fn();
  removeExpense = jest.fn();
  wrapper = shallow(
    <EditExpensePage
      updateExpense={updateExpense}
      removeExpense={removeExpense}
      history={history}
      expense={expenses[1]}
    />
  );
});

test("should render edit expense page correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle edit expense", () => {
  // form submit cannot be simulated because we are not shallow rendering the component
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(updateExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith("/");
});


test("should handle remove expense", () => {
  wrapper.find("button").simulate("click");
  expect(removeExpense).toHaveBeenLastCalledWith(expenses[1].id);
  expect(history.push).toHaveBeenLastCalledWith("/");
});