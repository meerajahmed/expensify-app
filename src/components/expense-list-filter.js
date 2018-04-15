import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../actions/filters";
import 'react-dates/initialize';
import {DateRangePicker} from "react-dates";
import {  withStyles } from 'react-with-styles';

export class ExpenseListFilter extends React.Component {

  state = {
    calenderFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));

  };

  onFocusChange = (calenderFocused) => {
    this.setState(() => ({calenderFocused}));
  };

  render() {
    return (
      <div>
        <input type="text" value={this.props.filters.text} onChange={(event) => {
          this.props.dispatch(setTextFilter(event.target.value));
        }} />
        <select value={this.props.filters.sortBy} onChange={(event)=>{
          if( event.target.value === "amount" ){
            this.props.dispatch(sortByAmount());
          } else if( event.target.value === "date" ) {
            this.props.dispatch(sortByDate());
          }
        }}>
          <option value="amount">Amount</option>
          <option value="date">Date</option>
        </select>
        <DateRangePicker
          startDateId="startDateId"
          endDateId="endDateId"
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calenderFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}


const mapStateToProps = (state) => (
  {
    filters: state.filters
  }
);

export default connect(mapStateToProps)(ExpenseListFilter);
