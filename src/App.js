//import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
import ExpenseForm from "./components/ExpenseForm";
import "./App.css";

function App() {
  const expenses = [
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
      date: new Date(1970, 12, 13),
      location: "Delhi",
    },
  ];

  return (
    <div>
      <ExpenseForm />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
