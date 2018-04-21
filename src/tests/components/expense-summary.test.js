import React from "react";
import {shallow} from "enzyme";
import {ExpenseSummary} from "../../components/expenses-summary";

test("should correctly render expense summary with one expense", () => {
  const wrapper = shallow( <ExpenseSummary  expenseCount={1} expensesTotal={235} /> );
  expect(wrapper).toMatchSnapshot();
});

test("should correctly render expense summary with multiple expenses", () => {
  const wrapper = shallow( <ExpenseSummary expenseCount={23} expensesTotal={235112340987} /> );
  expect(wrapper).toMatchSnapshot();
});