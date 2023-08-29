import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const inputChangeHandler = (identifier, value) => {
    if (identifier === 'title') {
      setEnteredTitle(value);
    } else if (identifier === 'amount') {
      setEnteredAmount(value);
    } else {
      setEnteredDate(value);
      }
    }

  const submitHandler = (event)=> {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

    return (
      <form onSubmit={submitHandler}>
        <div className='new-expense__control'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input
              type='text'
              value={enteredTitle}
              onChange={(event) => {inputChangeHandler('title', event.target.value)}}
              />
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input
              type='number'
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={(event) => {inputChangeHandler('amount', event.target.value)}}/>
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input
              type='date'
              min="2019-01-01"
              max="2023-12-31"
              value={enteredDate}
              onChange={(event) => {inputChangeHandler('date', event.target.value)}}/>
          </div>
        </div>
        <div className='new-expense__action'>
          <button onClick={props.onCancelButton}>Cancel</button>
          <button type='submit'>Add expense</button>
        </div>
      </form>
    );
  }

export default ExpenseForm;
