import React, { useState } from 'react';
import { Modal, Button,  } from 'react-bootstrap'; 


function ExpenseList({ expenses, deleteExpense }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [loading, setLoading] = useState(false); 
  const handleDelete = (index) => {
    setDeleteIndex(index);
    setShowConfirmation(true);
  };

  const handleConfirmDelete = () => {
    setLoading(true); 
    deleteExpense(deleteIndex);
    setShowConfirmation(false);
    setTimeout(() => {
      setLoading(false); 
    }, 1000);
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  return (
    <div>
      <h2 className="mt-4 mb-3" style={{ color: '#ffff07' }}>Expenses :</h2>
      <ul className="list-group">
        {expenses.map((expense, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <div className="d-flex align-items-center">
                <span className="mr-2">{expense.name}: {expense.amount.toFixed(2)}$</span>
              </div>
              <div className="text-muted">{new Date(expense.date).toLocaleDateString()}</div>
            </div>
            <button onClick={() => handleDelete(index)} className="btn btn-danger" disabled={loading}>
              {loading ? 'Deleting...' : 'Delete'}
            </button>
          </li>
        ))}
      </ul>
      <Modal show={showConfirmation} onHide={handleCancelDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this expense?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete} disabled={loading}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete} disabled={loading}>
            {loading ? 'Deleting...' : 'Delete'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ExpenseList;

