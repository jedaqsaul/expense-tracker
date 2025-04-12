import React from "react";
import "./ExpenseTable.css";

export default function ExpenseTable({ data }) {
  return (
    <div>
      <h2>Submitted info:</h2>
      {data ? (
        <div>
          <p>
            <strong>Name:</strong>
            {data.name}
          </p>
          <p>
            <strong>Description:</strong>
            {data.description}
          </p>
          <p>
            <strong>Category:</strong>
            {data.category}
          </p>
          <p>
            <strong>Amount:</strong>
            {data.amount}
          </p>
        </div>
      ) : (
        <p>No data submitted yet</p>
      )}
    </div>
  );
}
