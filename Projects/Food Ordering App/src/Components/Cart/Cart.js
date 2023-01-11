import { Fragment } from "react";
import Model from "../UI/Model";
import * as cartStyle from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "name", name: "muhammad" }].map((item) => {
        return <li>{item.id}</li>;
      })}
    </ul>
  );
  return (
    <Model onClick={props.onClick}>
      {cartItems}
      <div className={cartStyle.total}>
        <span>Total Amount</span>
        <span>78.8</span>
      </div>
      <div className={cartStyle.actions}>
        <button className={cartStyle["button--alt"]} onClick={props.onClick}>Close</button>
        <button className={cartStyle.button}>Order</button>
      </div>
    </Model>
  );
};
export default Cart;
