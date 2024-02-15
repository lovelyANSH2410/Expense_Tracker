import "./ExpenseItem.css";

const ExpenseDetails = (props) => {
  return (
    <div className="expense-item__description">
      <h2 className="">{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
      <div>{props.location}</div>
    </div>
  );
};

export default ExpenseDetails;
