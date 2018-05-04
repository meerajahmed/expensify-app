import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./expense-form";
import { startAddExpense } from "../actions/expenses";

/*
const AddExpensePage = (props) => (
  <div>
    <ExpenseForm onSubmit={(expense) => {
       //props.dispatch(addExpense(expense));
       props.onSubmit(expense); // easy to spy on expense argument
       props.history.push('/');
    }} />
  </div>
);
*/

export class AddExpensePage extends React.Component {

  onSubmit = (expense) => {
    //props.dispatch(addExpense(expense));
    this.props.startAddExpense(expense); // easy to spy on expense argument
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

//
/*
* Its difficult to spy addExpense function call argument.
* So we abstract dispatch (addExpense) call from component using mapDispatchToProps
* */

const mapDispatchToProps = (dispatch) => (
  {
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
  }
);
export default connect(undefined, mapDispatchToProps)(AddExpensePage);