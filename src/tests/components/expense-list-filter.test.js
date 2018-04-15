import React from "react";
import {shallow} from "enzyme";
import {ExpenseListFilter} from "../../components/expense-list-filter";
import {filters, altFilters} from "../fixtures/filters";

let setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate, wrapper;

beforeEach(() => {
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  setTextFilter = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();

  wrapper = shallow(
    <ExpenseListFilter
      filters={ filters }
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
    />
  );
});

test("should render expense list filter correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render expense list filter with alt data correctly", () => {
  //update props
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  const value = "bills";
  wrapper.find("input").simulate("change", {
    target: { value }
  });
});

test("should sor by date", () => {});

test("should sort by amount", () => {});

test("should handle date change", () => {});

test("should handle date focus change", () => {});