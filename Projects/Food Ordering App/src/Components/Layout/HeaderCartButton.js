import React, { Fragment } from "react";
import * as buttonStyle from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
const HeaderCartButton = () => {
  return (
    <Fragment>
      <button className={buttonStyle.button}>
        <span className={buttonStyle.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={buttonStyle.badge}>6</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;
