import React from "react";
import "./Button.css"

const Button = ({ type, title, clickHandler, classname }) => {
  return <button onClick={clickHandler} className={`${type}-button button ${classname}`} >{title}</button>;
};

export default Button;
