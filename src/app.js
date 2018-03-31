import React from "react";
import ReactDOM from "react-dom";
import AppRouters from "./routers/app-router";
import configureStore from "./store/configureStore"

import "normalize.css/normalize.css";
import "./style/style.scss";
import {addExpense} from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill" }));
store.dispatch(addExpense({ description: "Gas bill" }));
store.dispatch(setTextFilter("Water"));

const state = store.getState();
const visibleExpenses= getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const appRoot = document.getElementById("app");

ReactDOM.render(<AppRouters />, appRoot);