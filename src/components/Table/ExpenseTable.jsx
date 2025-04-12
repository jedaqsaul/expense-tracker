import React from "react";
import "./ExpenseTable.css";

export default function ExpenseTable({ data }) {
  return (
    <div>
      <h2>Expense List</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
