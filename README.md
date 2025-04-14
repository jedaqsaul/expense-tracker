readme_content = """

# 💸 Expense Tracker with React

Track your expenses in real-time with a simple and elegant React app using forms, tables, and shared state.

---

## `App.jsx`

- Acts as the **root/parent component**
- Holds the shared state: `expenses`
- Renders both child components:
  - `Form`
  - `ExpenseTable`

---

## `Form.jsx`

The component responsible for capturing new expense data.

### Fields Included:

- **Expense Name**
- **Description**
- **Category**
- **Amount**
- (Optional: **Date**)

### What It Does:

- Contains 4+ input fields
- Has a **submit** button
- Uses `props.onAddExpense()` to send the data up to `App.jsx`

### Under the Hood:

- `useState({})` → Stores form values locally
- `handleChange()` → Updates form fields on input
- `handleSubmit()` → Prevents reload and sends form data to `App.jsx`
- `setFormData({})` → Clears the form after submission

---

## `ExpenseTable.jsx`

This component displays the list of expenses in a neat table format.

### What It Does:

- Receives `props.data` (the expense list) from `App.jsx`
- Uses `.map()` to loop through and render each entry as a row
- Displays:
  - **Expense Name**
  - **Description**
  - **Category**
  - **Amount (formatted as KSh)**
- Uses `index` for row numbering and `key` prop

---

## App Logic Flow

1. `App.jsx` holds the list of expenses using `useState([])`
2. `Form.jsx` collects form data and sends it up using `onAddExpense()`
3. `App.jsx` updates the list using:
   ```js
   setExpenses([...expenses, newExpense]);
   ```

## Final Thoughts

- This project covers:

- React Forms

- useState Hooks

- Props & State Sharing

- Component Reusability

- Data Mapping

- Controlled Inputs

- Basic Filtering

- Dynamic Deletion

## Project Links:

- GitHub: https://github.com/jedaqsaul/expense-tracker

- Live Version:https://67fc8c450ab4060008805230--jedaq-expense-tracker.netlify.app/

---

### Built with by [Aquila Jedidia] https://github.com/jedaqsaul
