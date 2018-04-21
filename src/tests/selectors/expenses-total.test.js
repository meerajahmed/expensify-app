import selectorExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("should return 0 if no expenses", () => {
  const total = selectorExpensesTotal();
  expect(total).toBe(0);
});

test("should correctly add up a single expense", () => {
  const total = selectorExpensesTotal([expenses[0]]);
  expect(total).toBe(195);
});

test("should correctly add up multiple expenses", () => {
  const total = selectorExpensesTotal(expenses);
  expect(total).toBe(114195);
});