import React from "react";
import "../css/Card.css";

function Card(props) {
  const classes = "card " + props.className;
  // TODO: here children is the reserved keyword of react it is the child props of props it has all the content in between the <Component> content </Component> to use class for css we make a variable and add current class and the props.className {reserved by react} that will fetch the class which has been provided when the Card component is used in Expense.js
  return <div className={classes}>{props.children}</div>;
}

export default Card;
