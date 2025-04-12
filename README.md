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
- onAddStudent(formData)- Adds the student to the global list
- setFormData({...}) -Resets the form after submission

## EXPENSETABLE.JSX

- The component that:
- Receives the list of expenses as props from App
- Renders them as rows in a table

#### What it is supposed to do

- Receives the expense list as a prop (data)
- Render each expense's name, description, category and amount

## APP LOGIC FLOW:

1. App.jsx holds the list of expenses in state using useState([])
2. Form.jsx collects form input and passes a new expense object up to App
3. App.jsx updates the list using setExpenses([...expenses, newExpense])
4. ExpenseTable.jsx receives the updated list and renders the table.
