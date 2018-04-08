import React from "react";
import moment from "moment";

import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import {  withStyles } from 'react-with-styles';

export default class ExpenseForm extends React.Component {

  state = {
    description: "",
    note: "",
    amount: "",
    createdAt: moment(),
    calenderFocused: false,
    error: false
  };

  constructor(props){
    super(props);

    let defaultState = {
      description: "",
      note: "",
      amount: "",
      createdAt: moment(),
      calenderFocused: false,
      error: false
    };

    if( props.expense ){
      defaultState.description = props.expense.description;
      defaultState.note = props.expense.note;
      defaultState.amount = (props.expense.amount / 100).toString();
      defaultState.createdAt = moment(props.expense.createdAt)
    }
    this.state = defaultState;
  }

  onDescriptionChange = (event) => {
    const description = event.target.value;
    this.setState(() => ({
      description
    }))
  };

  onNoteChange = (event) => {
    const note = event.target.value;
    this.setState(() => ({
      note
    }));
  };

  onAmountChange = (event) => {
    const amount = event.target.value;
    if( !amount || amount.match(/^\d{1,}(\.\d{0,2})?$/) ){
      this.setState(() => ({
        amount
      }));
    }
  };

  onDateChange = ( createdAt ) => {
    this.setState({createdAt});
  };

  onFocusChange = ({ focused }) => {
    this.setState({ calenderFocused: focused });
  };

  onSubmit = (event) => {
    event.preventDefault();
    if( !(this.state.description && this.state.amount) ){
      this.setState(() => ({ error: true }));
    } else {
      this.setState(() => ({ error: false }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <div>
        { this.state.error && <p>Please provide description and amount!</p> }
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={()=>false}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}