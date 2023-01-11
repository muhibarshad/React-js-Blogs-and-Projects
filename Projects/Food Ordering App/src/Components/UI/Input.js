import React, { Fragment } from "react";
import * as inputStyle from "./Input.module.css";

const Input = (props) => {
  return (
    <Fragment>
      <div className={inputStyle.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input} />
      </div>
    </Fragment>
  );
};

export default Input;
