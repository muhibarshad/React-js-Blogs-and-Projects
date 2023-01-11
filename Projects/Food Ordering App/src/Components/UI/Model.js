import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import * as modelStyle from "./Model.module.css";

const Backdrop = (props) => {
  return <div className={modelStyle.backdrop} onClick={props.onClick}/>;
};

const ModelWindow = (props) => {
  return (
    <div className={modelStyle.modal}>
      <div className={modelStyle.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");
const Model = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModelWindow >{props.children}</ModelWindow>,
        portalElement
      )}
    </Fragment>
  );
};
export default Model;
