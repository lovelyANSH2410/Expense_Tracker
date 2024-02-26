//import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
import "./App.css";
import NewExpense from "./components/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: 0,
    title: "Toiler Paper",
    amount: 10.5,
    date: new Date(2019, 7, 15),
    location: "Agra",
  },
  {
    id: 1,
    title: "Toffee",
    amount: 105.6,
    date: new Date(2022, 2, 24),
    location: "Delhi",
  },
  {
    id: 2,
    title: "Pen",
    amount: 190,
    date: new Date(2020, 3, 9),
    location: "Delhi",
  },
  {
    id: 3,
    title: "Slippers",
    amount: 200,
    date: new Date(2024, 5, 3),
    location: "Delhi",
  },
  {
    id: 4,
    title: "Shoes",
    amount: 300,
    date: new Date(2024, 5, 3),
    location: "Noida",
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]; 
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
