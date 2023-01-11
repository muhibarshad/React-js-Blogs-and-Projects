import React, { Fragment } from "react";
import * as mealItemStyle from "./MealItem.module.css";
import MealForm from "./MealForm";
const MealItem = (props) => {
  const price = `$ ${props.price.toFixed(2)}`;
  return (
    <Fragment>
      <li className={mealItemStyle.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={mealItemStyle.description}>{props.description}</div>
          <div className={mealItemStyle.price}>{price}</div>
        </div>
        <div>
          <MealForm id={props.id} />
        </div>
      </li>
    </Fragment>
  );
};

export default MealItem;
