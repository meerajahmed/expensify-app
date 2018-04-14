import React from "react";
import {shallow} from "enzyme";
import {AddExpensePage} from "../../components/add-expense-page";
import expenses from "../fixtures/expenses";

let onSubmit, history, wrapper;

beforeEach(() => {
  onSubmit = jest.fn();
  history = {
    push : jest.fn()
  };
  wrapper = shallow( <AddExpensePage onSubmit={onSubmit} history={history} /> );
});

test("should render add expense page correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle on submit", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")( expenses[1] );
  expect(history.push).toHaveBeenCalledWith("/");
  expect(onSubmit).toHaveBeenCalledWith(expenses[1]);
});