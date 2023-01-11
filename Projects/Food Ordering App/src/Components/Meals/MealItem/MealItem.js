import React, { Fragment } from "react";
import * as mealItemStyle from "./MealItem.module.css";
const MealItem = (props) => {
  const price = props.price.toFixed(2);
  return (
    <Fragment>
      <li className={mealItemStyle.meal}>
        <div>
          <h2>{props.name}</h2>
          <div className={mealItemStyle.description}>{props.description}</div>
          <div className={mealItemStyle.price}>{price}</div>
        </div>
        <div></div>
      </li>
    </Fragment>
  );
};

export default MealItem;
