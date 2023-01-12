import * as formStyle from "./MealForm.module.css";
import React, { Fragment, useRef } from "react";
import Input from "../../UI/Input";
const MealForm = (props) => {
  const amountEntered = useRef();

  const formHandler = (e) => {
    e.preventDefault();
    const amountEnteredNumber = amountEntered.current.value;
    const pos = +amountEnteredNumber;
    props.onAddToCart(pos);
  };
  return (
    <Fragment>
      <form className={formStyle.form} onSubmit={formHandler}>
        <Input
          ref={amountEntered}
          label="Amount"
          input={{
            type: "number",
            defaultValue: 1,
            min: 1,
            max: 10,
            step: 1,
            id: "amount" + props.id,
          }}
        />
        <button>+ Add</button>
      </form>
    </Fragment>
  );
};
export default MealForm;
