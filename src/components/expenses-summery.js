import React from "react";
import numeral from "numeral";

export const ExpenseSummery = ( {expenseCount, expenseTotal} ) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formattedExpensesTotal = numeral(expenseTotal / 100).format("$0,0.00");
  return (
    <div>
      <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
    </div>
  );
};