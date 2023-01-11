import * as formStyle from "./MealForm.module.css";
import React, { Fragment } from "react";
import Input from "../../UI/Input";
const MealForm = (props) => {
  return (
    <Fragment>
      <form className={formStyle.form}>
        <Input
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
