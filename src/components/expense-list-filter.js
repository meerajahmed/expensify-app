import React from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../actions/filters";

const ExpenseListFilter = (props) => (
  <div>
    <input type="text" value={props.filters.text} onChange={(event) => {
      props.dispatch(setTextFilter(event.target.value));
    }} />
  </div>
);

const mapStateToProps = (state) => (
  {
    filters: state.filters
  }
);

export default connect(mapStateToProps)(ExpenseListFilter);
