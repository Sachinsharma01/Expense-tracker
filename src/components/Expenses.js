import React, { useState } from "react";
import "../css/Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  // * we can also do it like this
  /* <div className="expenses">
    <ExpenseItem
      title={props.expenses[0].title}
      price={props.expenses[0].amount}
      date={props.expenses[0].date}
    />
    <ExpenseItem
      title={props.expenses[1].title}
      price={props.expenses[1].amount}
      date={props.expenses[1].date}
    />
    <ExpenseItem
      title={props.expenses[2].title}
      price={props.expenses[2].amount}
      date={props.expenses[2].date}
    />
    <ExpenseItem
      title={props.expenses[3].title}
      price={props.expenses[3].amount}
      date={props.expenses[3].date}
    />
  </div>
  */

  const [filteredYear, setFilteredYear] = useState("2020");
  const ExpensesFilterHandler = (selectedYear) => {
    // console.log("Expenses.js");
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  //! this is to show only selected year expenses filter is inbuilt javascript array method
  const newArrayExpenses = props.expenses.filter(
    (expenseObject) =>
      expenseObject.date.getFullYear().toString() === filteredYear
  );
  // console.log(newArrayExpenses);
  return (
    // ?this is how we can use our custom tag in react and pass content between it
    <div>
      <Card className="expenses">
        <ExpensesFilter
          setedYear={filteredYear}
          onExpenseFilter={ExpensesFilterHandler}
        />
        <ExpensesChart expenses={newArrayExpenses} />
        <ExpenseList ExpenseArray={newArrayExpenses} />
        {/* {newArrayExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            price={expense.amount}
            date={expense.date}
          />
        ))} */}
        {/* <ExpenseItem />
        <ExpenseItem
          title={props.expenses[1].title}
          price={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          price={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          price={props.expenses[3].amount}
          date={props.expenses[3].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
