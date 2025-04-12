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

## EXPENSETABLE.JSX

- The component that:
- Receives the list of expenses as props from App
- Renders them as rows in a table

## APP LOGIC FLOW:

1. App.jsx holds the list of expenses in state using useState([])
2. Form.jsx collects form input and passes a new expense object up to App
3. App.jsx updates the list using setExpenses([...expenses, newExpense])
4. ExpenseTable.jsx receives the updated list and renders the table.
