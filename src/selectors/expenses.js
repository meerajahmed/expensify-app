import moment from "moment";

// Get visible expenses
export default ( expenses, { text, sortBy, startDate, endDate} ) => {
  return expenses.filter((expenses) => {
    const createdAtMoment = moment(expenses.createdAt);
    // const startDateMatch = typeof startDate !== "number" || expenses.createdAt >= startDate;
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, "day") : true;
    // const endDateMatch = typeof endDate !== "number" || expenses.createdAt <= endDate;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, "day") : true;
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
