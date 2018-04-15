import React from "react";
import {shallow} from "enzyme";
import {ExpenseListFilter} from "../../components/expense-list-filter";
import {filters} from "../fixtures/filters";


test("should render expense list filter correctly", () => {
  const setStartDate = jest.fn();
  const setEndDate = jest.fn();
  const setTextFilter = jest.fn();
  const sortByAmount = jest.fn();
  const sortByDate = jest.fn();

  const wrapper = shallow(
    <ExpenseListFilter
      filters={ filters }
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
    />
  );
  expect(wrapper).toMatchSnapshot();
});