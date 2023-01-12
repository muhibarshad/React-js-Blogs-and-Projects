import React, { Fragment, useContext, useEffect, useState } from "react";
import * as buttonStyle from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import cartContext from "../../Store/cart-context";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(cartContext);
  const numberOfCarts = cartCtx.item.reduce((num, item) => {
    return num + item.amount;
  }, 0);
  const items = cartCtx.item;
  const [isBump, updateBump] = useState(false);
  useEffect(() => {
    updateBump(true);
    const timer = setTimeout(() => {
      updateBump(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const buttonClass = `${buttonStyle.button} ${isBump ? buttonStyle.bump : ""}`;
  return (
    <Fragment>
      <button className={buttonClass} onClick={props.onClick}>
        <span className={buttonStyle.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={buttonStyle.badge}>{numberOfCarts}</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;
