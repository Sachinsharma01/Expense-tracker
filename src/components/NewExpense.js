import React, {useState} from "react";
import "../css/NewExpense.css";
import ExpenseFrom from "./ExpenseForm";

export default function NewExpense(props) {
  //? useState to store the button for conditional rendering
  const [isEditing, setIsEditing] = useState(false);

  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };  
  
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
    {!isEditing && <button onClick={startEditingHandler}>Add expense</button>}
    {isEditing && <ExpenseFrom onSaveExpenseData={SaveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  );
}
