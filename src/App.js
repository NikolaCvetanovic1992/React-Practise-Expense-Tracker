import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const dummyExpenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "Laptop (Golden)",
      amount: 1000,
      date: new Date(2022, 3, 23),
    },
  ];

  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenceHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpence={addExpenceHandler} />
      <Expenses item={expenses}></Expenses>
    </div>
  );
};

export default App;