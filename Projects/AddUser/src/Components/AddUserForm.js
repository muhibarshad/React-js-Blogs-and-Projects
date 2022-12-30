import React, { useState } from "react";
import * as form from "./AddUserForm.module.css";
import ModelWindow from "../UI/ModelWindow";
const AddUserForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameValueHandler = (e) => {
    setName(e.target.value);
  };
  const ageValueHandler = (e) => {
    setAge(e.target.value);
  };
  const [error, setError] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const dataUser = {
      id: Math.random().toString(),
      name: name,
      age: age,
    };

    if (name.trim().length === 0 || age.trim().length === 0) {
      setError("Error: Input fields are empty!");
    }
    if (+age < 0) {
      setError("Error: Age must be greater than 0!");
    }
    // if (error === "") return;
    props.addUserInList(dataUser);
    setName("");
    setAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ModelWindow errors={error} onConfirm={errorHandler} />}
      <form className={form.form}>
        <div className={form.input}>
          <label>Enter your Name</label>
          <input type="text" value={name} onChange={nameValueHandler} />
        </div>
        <div className={form.input}>
          <label>Enter your Age</label>
          <input type="number" value={age} onChange={ageValueHandler} />
        </div>
        <button type="submit" className={form.button} onClick={submitHandler}>
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
