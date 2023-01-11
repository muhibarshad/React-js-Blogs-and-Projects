import React, { Fragment } from "react";
import * as headerStyle from "./Header.module.css";
import image from "../../Assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={headerStyle.header}>
        <h1>Muhib Food Orders</h1>
        <HeaderCartButton />
      </header>
      <div className={headerStyle["main-image"]}>
        <img src={image} alt="Food PIC" />
      </div>
    </Fragment>
  );
};

export default Header;
