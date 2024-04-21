import React, { useState } from 'react';

function ExpenseForm({ addExpense }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount || !date || loading) return;
    setLoading(true);
    addExpense({ name, amount: parseFloat(amount), date });
    setName('');
    setAmount('');
    setDate('');
    setTimeout(() => {
      setLoading(false); 
    }, 2000); 
  };

  return (
    <div className="expense-form-wrapper">
      <form onSubmit={handleSubmit} className="my-4">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Expense Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Adding Expense...' : 'Add Expense'}
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
