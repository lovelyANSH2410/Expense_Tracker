import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

  function handleTitleChange(event) {
    setEnteredTitle(event.target.value);
  }

  function handleAmountChange(event) {
    setEnteredAmount(event.target.value);
  }
  function handleDateChange(event) {
    setEnteredDate(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    
    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
    };
    console.log(expenseData); 
  };

  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title:</label>
            <input type="text" onChange={handleTitleChange}></input>
          </div>
          <div className="new-expense__control">
            <label>Amount:</label>
            <input type="number" onChange={handleAmountChange}></input>
          </div>
          <div className="new-expense__control">
            <label>Date:</label>
            <input type="date" onChange={handleDateChange}></input>
          </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
