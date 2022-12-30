import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const expenseDataHandler = (expenseData) => {
    const expense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.afterAddNewExpense(expense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDate={expenseDataHandler} />
    </div>
  );
};

export default NewExpense;
