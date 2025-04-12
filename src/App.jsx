import React, { useState } from "react";
import Form from "./components/Form/Form";
import ExpenseTable from "./components/Table/ExpenseTable";
import "./App.css";

export default function App() {
  const [expenses, setExpenses] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleAddExpense = (newExpense) => {
    setExpenses((prev) => [...prev, newExpense]);
  };
  return (
    <div className="app">
      <Form onAddExpense={handleAddExpense} />
      <ExpenseTable data={expenses} />
    </div>
  );
}
