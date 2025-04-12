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
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  //Filter expenses based on search
  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="app">
      <Form onAddExpense={handleAddExpense} />

      <div style={{ flex: 1 }}>
        <input
          type="text"
          placeholder="Search byname"
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-bar"
        />
      </div>
      <ExpenseTable data={filteredExpenses} />
    </div>
  );
}
