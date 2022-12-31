import React, { useState, useRef } from "react";
import * as form from "./AddUserForm.module.css";
import ModelWindow from "../UI/ModelWindow";
const AddUserForm = (props) => {
  const nameRef = useRef(null);
  const ageRef = useRef(null);

  const [error, setError] = useState("");
  const [err, setErr] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    const dataUser = {
      id: Math.random().toString(),
      name: nameRef.current.value,
      age: ageRef.current.value,
    };
    if (
      nameRef.current.value.trim().length !== 0 &&
      ageRef.current.value.trim().length !== 0 &&
      +ageRef.current.value > 0
    ) {
      if (!err) {
        props.addUserInList(dataUser);
        ageRef.current.value = "";
        nameRef.current.value = "";
      }
    } else if (
      nameRef.current.value.trim().length === 0 ||
      ageRef.current.value.trim().length === 0
    ) {
      setError("Error: Input fields are empty!");
      setErr(true);
      if (nameRef.current.value.trim().length === 0) {
        nameRef.current.value = "";
      }
      if (ageRef.current.value.trim().length === 0) {
        ageRef.current.value = "";
      }
    } else if (+ageRef.current.value < 0) {
      setError("Error: Age must be greater than 0!");
      setErr(true);
    }
    console.log(err);
  };

  const errorHandler = () => {
    setError(null);
    setErr(false);
  };

  return (
    <>
      {error && <ModelWindow errors={error} onConfirm={errorHandler} />}
      <form className={form.form}>
        <div className={form.input}>
          <label>Enter your Name</label>
          <input type="text" ref={nameRef} />
        </div>
        <div className={form.input}>
          <label>Enter your Age</label>
          <input type="number" ref={ageRef} />
        </div>
        <button type="submit" className={form.button} onClick={submitHandler}>
          Add User
        </button>
      </form>
    </>
  );
};

export default AddUserForm;
