import React, { useState } from "react";
import * as form from "./AddUserForm.module.css";
const AddUserForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameValueHandler = (e) => {
    setName(e.target.value);
  };
  const ageValueHandler = (e) => {
    setAge(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const dataUser = {
      id: Math.random().toString(),
      name: name,
      age: age,
    };
    props.addUserInList(dataUser);
    setName("");
    setAge("");
  };

  return (
    <div>
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
