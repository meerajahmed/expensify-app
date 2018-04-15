import React from "react";
import {shallow} from "enzyme";
import {EditExpensePage} from "../../components/edit-expense-page";
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
    />
  );
});

test("should render edit expense page correctly", () => {
  expect(wrapper).toMatchSnapshot();
});