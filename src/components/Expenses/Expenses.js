import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2022');

  const YearFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  };

  const filteredItems = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selection={filteredYear}
          onFilteredYear={YearFilterHandler}
        />

        <ExpensesList items={filteredItems} />
      </Card>
    </div>
  );
};

export default Expenses;
