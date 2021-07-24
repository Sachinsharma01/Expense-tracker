import React from "react";
import "../css/ExpenseDate.css";

export default function ExpenseDate(props) {
  // const months = [
  //   "January",
  //   "Feburary",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];
  // console.log(props.date.getMonth());
  // let i = props.date.getMonth();
  // const month = months[i];
  const month = props.date.toLocaleString('en-US', {month: 'long'})
  const year = props.date.getFullYear(); // these are just date object functions in JS
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
