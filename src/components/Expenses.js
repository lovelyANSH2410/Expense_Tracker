import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";
import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2024");
  const [expenses, setExpenses] = useState(props.items);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    {
      const filteredExpenseList = props.items.filter(
        (res) => res.date.getFullYear().toString() === selectedYear
      );
      setExpenses(filteredExpenseList);
    }
  };

  let expensesContent = <p>No expenses found!</p>;

  if (expenses.length > 0) {
    expensesContent = expenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
