import React from "react";
import {shallow} from "enzyme";
import {ExpenseListFilter} from "../../components/expense-list-filter";
import {filters, altFilters} from "../fixtures/filters";
import moment from "moment";

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
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("should sort by date", () => {
  const value = "date";
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find("select").simulate("change", {
    target: { value }
  });
  expect(sortByDate).toHaveBeenCalled();
});

test("should sort by amount", () => {
  const value = "amount";
  wrapper.find("select").simulate("change", {
    target: { value }
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test("should handle date change", () => {
  const startDate = moment(0).add(4, "years");
  const endDate = moment(0).add(8, "years");
  wrapper.find("withStyles(DateRangePicker)").prop("onDatesChange")({ startDate, endDate });
  expect(setStartDate).toHaveBeenCalledWith(startDate);
  expect(setEndDate).toHaveBeenCalledWith(endDate);
});

test("should handle date focus change", () => {
  const calenderFocused = "endDate";
  wrapper.find("withStyles(DateRangePicker)").prop("onFocusChange")(calenderFocused);
  expect(wrapper.state("calenderFocused")).toBe(calenderFocused);
});