import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [changedTitle, setTitleChanged] = useState("");
  const [changedPrice, setPriceChanged] = useState("");
  const [changedDate, setDateChanged] = useState("");

  const titleChangeHandler = (e) => {
    setTitleChanged(e.target.value);
  };
  const priceChangeHandler = (e) => {
    setPriceChanged(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDateChanged(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: changedTitle,
      amount: changedPrice,
      date: new Date(changedDate),
    };
    props.onSaveExpenseDate(expenseData);
    setTitleChanged("");
    setPriceChanged("");
    setDateChanged("");
  };

  return (
    <form className="new-expense__controls" onSubmit={submitHandler}>
      <div className="new-expense__control">
        <label className="new-expense__control">Title</label>
        <input type="text" onChange={titleChangeHandler} value={changedTitle} />
      </div>
      <div className="new-expense__control">
        <label>Price</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={changedPrice}
          onChange={priceChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2022-01-01"
          max="2024-12-31"
          value={changedDate}
          onChange={dateChangeHandler}
        />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
