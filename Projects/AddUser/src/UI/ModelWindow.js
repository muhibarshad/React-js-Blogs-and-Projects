import React from "react";
import ReactDOM from "react-dom";
import * as modelStyle from "./ModelWindow.module.css";
const ModelWindow = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <div
            className={modelStyle["modal-backdrop"]}
            onClick={props.onConfirm}
          ></div>
          <div className={modelStyle["modal-window"]}>
            <div className={modelStyle["modal-header"]}>
              <h2>Invalid Input</h2>
            </div>
            <div className={modelStyle["modal-body"]}>
              <p className={modelStyle["error-message"]}>{props.errors}</p>
            </div>
            <button
              type="button"
              className={modelStyle.button}
              onClick={props.onConfirm}
            >
              Close
            </button>
          </div>
        </>,
        document.getElementById("modelWindow")
      )}
    </>
  );
};
export default ModelWindow;
