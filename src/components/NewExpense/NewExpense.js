import React, {useState} from "react";
import './NewExpenses.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false)

  const displayFormHandler = () => {
    setDisplayForm(true)
  }

  const hideFormHandler = () => {
    setDisplayForm(false)
  }

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setDisplayForm(false)
  };

  return <div className="new-expense">
    {displayForm && (
      <ExpenseForm
        onSaveExpenseData={onSaveExpenseDataHandler}
        onCancelButton={hideFormHandler}
      />
    )}
    {!displayForm && (
      <button onClick={displayFormHandler}>Add new expense</button>
    )}
  </div>
};

export default NewExpense;
