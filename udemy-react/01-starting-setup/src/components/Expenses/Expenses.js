import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("ALL");

  const yearChange = (yearSelected) => {
    setFilteredYear(yearSelected);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return filteredYear === "ALL"
      ? expense
      : expense.date.getUTCFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onYearChange={yearChange} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
