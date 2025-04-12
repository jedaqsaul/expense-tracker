# EXPENSE-TRACKER WITH REACT

## APP.JSX

- the parent component that holds the shared state(expenses) and renders both:
- THe Form
- The Table

## FORM.JSX

- The components that contains:
- Expense name
- Expense description
- Expense category
- Expense Amount

#### what it is supposed to do

- Contain four input fields:name, description,category and amount
- contain a submit button
- Form to collect data, then send it up to App using props.onAddExpense

#### What happens here

- useState({...}) -Stores form values locally
- handleChange -Updates the form field based on input
- handleSubmit- Prevents reload, sends data up to App
- onAddExpense(formData)- Adds the expense to the global list
- setFormData({...}) -Resets the form after submission

## EXPENSETABLE.JSX

- The component that:
- Receives the list of expenses as props from App
- Renders them as rows in a table

#### What it is supposed to do

- Receives the expense list as a prop (data)
- Render each expense's name, description, category and amount

#### what it does

-props.data -Comes from App — the full list of expenses
-.map() -Loops through expenses to create rows
-index -Used for numbering the rows and as a key
-Table -Displays the data clean and easy

## APP LOGIC FLOW:

1. App.jsx holds the list of expenses in state using useState([])
2. Form.jsx collects form input and passes a new expense object up to App
3. App.jsx updates the list using setExpenses([...expenses, newExpense])
4. ExpenseTable.jsx receives the updated list and renders the table.

## Additional features

- Add a search input above the table
- As the user tpes, shows only expensess whose names include the text
  -Real-time filtering

### What do we need

- State to hold the searchQuery
- A way to filter the expenses based on that query
- Add a search input field above the table

### what it does

- searchQuery Holds the text typed in the input
- handleSearchChange Updates the searchQuery as user types
- filteredStudents Only expenses whose name matches search
- value + onChange Makes it a controlled input field

### Add a delete expense functionality

- Add a delete button beside each expense row in the table
- When clicked, it removes that expense from the list

#### what we need

- A handleDelete function App.jsx
- Pass that function to ExpenseTable.jsx
- Add a delete button in each table row, and hook it up
