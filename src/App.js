import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 0,
      title: "toiler paper",
      amount: 10.5,
      date: new Date(2019, 7, 15),
      location: "Agra",
    },
    {
      id: 1,
      title: "toffee",
      amount: 105.6,
      date: new Date(2022, 2, 24),
      location: "Delhi",
    },
    {
      id: 2,
      title: "pen",
      amount: 190,
      date: new Date(2020, 3, 9),
      location: "Delhi",
    },
    {
      id: 3,
      title: "slippers",
      amount: 200,
      date: new Date(1970, 12, 13),
      location: "Delhi",
    },
  ];

  return (
    <div>
     {expenses.map((expense, i) => (
        <ExpenseItem
        key={i}
        title={expenses[i].title}
        amount={expenses[i].amount}
        date={expenses[i].date}
        location={expenses[i].location}
      ></ExpenseItem>
     ))
    }
    </div>
  );
}

export default App;
