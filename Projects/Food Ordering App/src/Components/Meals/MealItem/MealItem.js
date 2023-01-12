import React, { Fragment, useContext } from "react";
import * as mealItemStyle from "./MealItem.module.css";
import MealForm from "./MealForm";
import cartContext from "../../../Store/cart-context";

const MealItem = (props) => {
  const price = `$ ${props.price.toFixed(2)}`;
  const ctx = useContext(cartContext);
  const onAdd = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };
  return (
    <Fragment>
      <li className={mealItemStyle.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={mealItemStyle.description}>{props.description}</div>
          <div className={mealItemStyle.price}>{price}</div>
        </div>
        <div>
          <MealForm id={props.id} onAddToCart={onAdd} />
        </div>
      </li>
    </Fragment>
  );
};

export default MealItem;
