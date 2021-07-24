import React from "react";
import ExpenseItem from "./ExpenseItem";

//! conditional rendering {like if else} is our array is empty then we print the message*/
const ExpenseList = (props) => {
  return props.ExpenseArray.length === 0 ? (
    <p style={{ color: "white", textAlign: "center " }}>No Expenses found!!</p>
  ) : (
    props.ExpenseArray.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        price={expense.amount}
        date={expense.date}
      />
    ))
  );
};

export default ExpenseList;
