import "./ExpenseForm.css";

const ExpenseForm = () => {

  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <div className="new-expense" onChange={handleChange}>
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title:</label>
            <input type="text"></input>
          </div>
          <div className="new-expense__control">
            <label>Amount:</label>
            <input type="number"></input>
          </div>
          <div className="new-expense__control">
            <label>Date:</label>
            <input type="date"></input>
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
