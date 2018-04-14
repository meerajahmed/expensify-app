import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./expense-list-item";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {
      props.expenses.length > 0 ? (
        props.expenses.map(( expense ) => (
          <ExpenseListItem key={expense.id} {...expense} />
        ))
      ) : (
        <p>Empty expense</p>
      )
    }
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
