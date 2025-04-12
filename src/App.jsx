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
  const handleDelete = (nameToDelete) => {
    const updatedList = expenses.filter(
      (expense) => expense.name !== nameToDelete
    );
    setExpenses(updatedList);
  };
  return (
    <div className="app">
      <div className="header">
        <h1 className="title">Expense Tracker</h1>
        <p className="app-description">
          Start taking control of your finances and Life.Record categorize and
          analyze your spending
        </p>
      </div>
      <div className="hero">
        <div className="form-container">
          <Form onAddExpense={handleAddExpense} />
        </div>
        <div>
          <div className="search-bar-container">
            <input
              type="text"
              placeholder="Search byname"
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-bar"
            />
          </div>
          <div className="table-container">
            <ExpenseTable data={filteredExpenses} onDelete={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  );
}
