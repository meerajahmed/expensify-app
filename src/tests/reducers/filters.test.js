import filterReducer from "../../reducers/filters";
import moment from "moment";
//Test default state, to make sure the reducers are set up correctly
test("should set up default filter state", () => {
  // param: current state, action object
  const state = filterReducer(undefined, { type: "@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set up filter state to sort by amount", () => {
  const state = filterReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set up filter state to sort by date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filterReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("should set up filter state to sort by text", () => {
  const state = filterReducer(undefined, {
    type: "SET_TEXT_FILTER",
    text: "rent"
  });
  expect(state.text).toBe("rent");
});

test("should set up filter state to sort by start date", () => {
  const startDate = moment();
  const state = filterReducer(undefined, {
    type: "SET_START_DATE",
    startDate
  });
  expect(state.startDate).toEqual(startDate);
});

test("should set up filter state to sort by end date", () => {
  const endDate = moment();
  const state = filterReducer(undefined, {
    type: "SET_END_DATE",
    endDate
  });
  expect(state.endDate).toEqual(endDate);
});
