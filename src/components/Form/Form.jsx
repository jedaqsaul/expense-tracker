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
  return (
    <form>
      <h2>Enter expense info</h2>
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="description" placeholder="Description" />
      <input type="text" name="category" placeholder="Category" />
      <input type="text" name="amount" placeholder="Amount" />
      <button type="submit">Submit</button>
    </form>
  );
}
