import React from "react";
import { connect } from "react-redux";

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    { props.filters.text }
    { props.expenses.length }
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
    expenses: state.expenses,
    filters: state.filters
  }
);

export default connect(mapStateToProps)(ExpenseList);
