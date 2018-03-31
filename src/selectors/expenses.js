
// Get visible expenses
export default ( expenses, { text, sortBy, startDate, endDate} ) => {
  return expenses.filter((expenses) => {
    const startDateMatch = typeof startDate !== "number" || expenses.createdAt >= startDate;
    const endDateMatch = typeof endDate !== "number" || expenses.createdAt <= endDate;
    const textMatch = expenses.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    /*
     * Sorting in ascending order
     *  a < b => -1
     *  a = b => 0
     *  a > b => 1
     * */

    // sorting in descending order
    if( sortBy === "date" ){
      return a.createdAt < b.createdAt ? 1 : -1
    } else if( sortBy === "amount") {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};
