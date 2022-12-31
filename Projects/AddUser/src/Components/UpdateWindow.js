import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import * as updateStyle from "./UpdateWindow.module.css";
import ModelWindow from "../UI/ModelWindow";

const UpdateWindow = (props) => {
  const updatedName = useRef("");
  const updatedAge = useRef("");
  const [updatedID, setUpdatedID] = useState(true);
  const [error, setError] = useState("");
  const [err, setErr] = useState(false);

  const updatedHandler = (e) => {
    e.preventDefault();
    const updatedUSer = {
      id: props.id,
      age: updatedAge.current.value,
      name: updatedName.current.value,
    };

    if (
      updatedName.current.value.trim().length !== 0 &&
      updatedAge.current.value.trim().length !== 0 &&
      +updatedAge.current.value > 0
    ) {
      if (!err) {
        setUpdatedID(false);
        props.onUpdate(updatedUSer);
        updatedAge.current.value = "";
        updatedName.current.value = "";
      }
    } else if (
      updatedName.current.value.trim().length === 0 ||
      updatedAge.current.value.trim().length === 0
    ) {
      setError("Error: Input fields are empty!");
      setErr(true);
      setUpdatedID(false);

      if (updatedName.current.value.trim().length === 0) {
        updatedName.current.value = "";
      }
      if (updatedAge.current.value.trim().length === 0) {
        updatedAge.current.value = "";
      }
    } else if (+updatedAge.current.value < 0) {
      setError("Error: Age must be greater than 0!");
      setErr(true);
      setUpdatedID(false);
    }

    console.log(err);
    // console.log(props);
    // console.log(updatedUSer);
  };
  const errorHandler = () => {
    setError(null);
    setErr(false);
    setUpdatedID(true);
  };

  return (
    <>
      {props.id &&
        updatedID &&
        ReactDOM.createPortal(
          <div class={updateStyle["modal-container"]}>
            <div class={updateStyle["modal-backdrop"]}></div>
            <div class={updateStyle["modal-content"]}>
              <form>
                <label>Enter Updated Name:</label>
                <br />
                <input ref={updatedName} />
                <br />
                <label>Enter Updated Age:</label>
                <br />
                <input ref={updatedAge} />
                <br />
                <br />
                <button
                  class={updateStyle["update-button"]}
                  onClick={updatedHandler}
                >
                  Update
                </button>
              </form>
            </div>
          </div>,
          document.getElementById("updateWindow")
        )}
      {error && <ModelWindow errors={error} onConfirm={errorHandler} />}
    </>
  );
};

export default UpdateWindow;
