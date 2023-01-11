import React, { Fragment } from "react";
import * as cardStyle from "./Card.module.css";
const Card = (props) => {
  return (
    <Fragment>
      <div className={cardStyle.card}>{props.childern}</div>
    </Fragment>
  );
};

export default Card;
