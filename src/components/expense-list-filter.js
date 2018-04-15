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
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);

  };

  onFocusChange = (calenderFocused) => {
    this.setState(() => ({calenderFocused}));
  };

  onTextChange = (event) => {
    this.props.setTextFilter(event.target.value);
  };

  onSortChange = (event) => {
    if( event.target.value === "amount" ){
      this.props.sortByAmount();
    } else if( event.target.value === "date" ) {
      this.props.sortByDate();
    }
  };

  render() {
    return (
      <div>
        <input type="text" value={this.props.filters.text} onChange={this.onTextChange} />
        <select value={this.props.filters.sortBy} onChange={this.onSortChange} >
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

const mapDispatchToProps = (dispatch) => (
  {
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter);
