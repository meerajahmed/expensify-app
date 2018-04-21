import React from "react";
import ExpenseList from "./expense-list";
import ExpenseListFilter from "./expense-list-filter";
import ExpenseSummary from "./expenses-summary";


const ExpenseDashboardPage = () => (
  <div>
    <ExpenseSummary />
    <ExpenseListFilter />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;