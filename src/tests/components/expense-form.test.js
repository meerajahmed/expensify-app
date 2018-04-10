import React from "react";
import {shallow} from "enzyme";
import ExpenseForm from "../../components/expense-form";
import expenses from "../fixtures/expenses";

test("should render ExpenseForm correctly", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});
