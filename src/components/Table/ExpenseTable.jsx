import React from "react";
import "./ExpenseTable.css";

export default function ExpenseTable({ data, onDelete }) {
  return (
    <div>
      <table border="1" cellPadding="10" className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((expense, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{expense.name}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td>
                <button
                  onClick={() => onDelete(expense.name)}
                  className="delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
