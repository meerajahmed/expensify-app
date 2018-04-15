import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./expense-form";
import {updateExpense, removeExpense} from "../actions/expenses";

export class EditExpensePage extends React.Component {

  onSubmit = (expense) => {
    this.props.updateExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onRemove = () => {
    this.props.removeExpense(this.props.expense.id);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>
          Remove
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => (
  {
    updateExpense: (id, expense) => {updateExpense(id, expense)},
    removeExpense: (id) => {removeExpense({id})}
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);