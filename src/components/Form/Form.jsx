import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  //create a state to store input values
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  //Handle change for each input
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  //handle submitted data
  const handleSubmit = (event) => {
    event.preventDefault(); // this is to stop refresh

    onAddExpense(formData); //send data upto the app

    setFormData({ name: "", description: "", category: "", amount: "" }); // reset the inputs after submission
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Enter expense info</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />
        <input
          type="text"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Submitted Info</h2>
        {submittedData && (
          <div>
            <p>
              <strong>Name:</strong>
              {submittedData.name}
            </p>
            <p>
              <strong>Description:</strong>
              {submittedData.description}
            </p>
            <p>
              <strong>Category:</strong>
              {submittedData.category}
            </p>
            <p>
              <strong>Amount:</strong>
              {submittedData.amount}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
