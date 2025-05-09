import React, { useState } from "react";
import "./Form.css";

export default function Form({ onAddExpense }) {
  //create a state to store input values
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });
  //Handle change for each input
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //handle submitted data
  const handleSubmit = (event) => {
    event.preventDefault(); // this is to stop refresh

    onAddExpense(formData); //send data upto the app

    setFormData({
      name: "",
      description: "",
      category: "",
      amount: "",
      date: "",
    }); // reset the inputs after submission
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Add Expense</h2>
        <p>Enter your expense details below</p>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          required
          min="0"
          step="100"
        />
        <input
          type="date"
          name="date"
          placeholder="Date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
