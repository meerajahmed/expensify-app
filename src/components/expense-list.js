import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./expense-list-item";
import selectExpenses from "../selectors/expenses";

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    { props.expenses.map(( expense ) => (
      <ExpenseListItem key={expense.id} {...expense} />
    )) }
  </div>
);

/*
const ConnectedExpenseList = connect(
  (state) => (
    {
      expenses: state.expenses
    }
  )
)(ExpenseList);

export default ConnectedExpenseList;*/

const mapStateToProps = (state) => (
  {
    expenses: selectExpenses(state.expenses, state.filters)
  }
);

export default connect(mapStateToProps)(ExpenseList);
