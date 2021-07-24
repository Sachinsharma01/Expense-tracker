import React from "react";
import "../css/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

export default function ExpenseItem(props) {
  // props is just like the parameters in functions TODO: components can not access other components data we can name props anything we want

  // ? this is hard coded we will make it soft by passing props in it

  //   return (
  //     <div className="expense-item">
  //       <div>March 28th 2021</div>
  //       <div className="expense-item__description">
  //         <h2>Car Insurance</h2>
  //         <div className="expense-item__price">$294.67</div>
  //       </div>
  //     </div>

  // ! This is how we handle events with hooks {useState}
  // ? all hooks return a default variable (title in this case) and a function to update it (setTitle in this case). this is called as array destructuring
  // ! the order is always same a default value followed by updating function
  // const [title, setTitle] = useState(props.title); // * all hooks starts with use

  // const changeTitle = () => {
  //    const titles = ["hello", "world", "this", "is", "Sachin's", "World"]
  //    setTitle(titles[parseInt(Math.random() * 10) % 5]);
  //   setTitle("new title");
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      {/* here we call changeTitle function to change Title */}
      {/* <button onClick={changeTitle}>change title</button> */}
    </Card>
  );
}
