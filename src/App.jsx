import React, { useState } from "react";
import Form from "./components/Form/Form";
import ExpenseTable from "./components/Table/ExpenseTable";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Form />
      <ExpenseTable />
    </div>
  );
}
