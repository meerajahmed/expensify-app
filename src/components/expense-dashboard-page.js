import React from "react";
import ExpenseList from "./expense-list";
import ExpenseListFilter from "./expense-list-filter";


const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilter />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;