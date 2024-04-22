import React, { useState, useEffect } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(storedExpenses);
  }, []);

  const addExpense = (expense) => {
    const updatedExpenses = [...expenses, expense];
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  };

  const deleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  };

  return (
    <div className="container">
      <h1 className="my-4 text-center movingTitle" style={{ color: '#ffff07' }}>Budget Planner</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
