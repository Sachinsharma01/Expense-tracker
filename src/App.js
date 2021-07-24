import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

//dummy data
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const Style = {
    textAlign: "center",
    color: "white",
  };

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // ! This is how we can pass data from child to parent component
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <h1 style={{ textAlign: "center", color: "white" }}>Expense Tracker!</h1>
      <h4 style={Style}>Sachin Sharma</h4>
      {/* passing while array in the props of Expenses component */}
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* we can name expenses anything we want here we name it expenses so we use same name int Expenses.js file as we pass it here */}
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
