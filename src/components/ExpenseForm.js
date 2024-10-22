import React from 'react';
import { useForm } from 'react-hook-form';

const ExpenseForm = ({ onAddExpense }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onAddExpense(data);
    reset();
  };

  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '20px', 
      maxWidth: '400px', 
      margin: '0 auto', 
      borderRadius: '8px', 
      backgroundColor: '#f9f9f9',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      marginBottom:'20px'
    }}>
      <h3 style={{textAlign: 'center'}}>Add a New Expense</h3>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          type="number"
          placeholder="Amount"
          {...register('amount', { required: true, min: 0 })}
          style={{ padding: '10px', width: '100%', marginBottom: '10px', boxSizing: 'border-box' }}
        />
        {errors.amount && <span style={{ color: 'red' }}>This field is required and must be a positive number</span>}

        <input
          type="text"
          placeholder="Description"
          {...register('description', { required: true })}
          style={{ padding: '10px', width: '100%', marginBottom: '10px', boxSizing: 'border-box' }}
        />
        {errors.description && <span style={{ color: 'red' }}>This field is required</span>}

        <input
          type="date"
          {...register('date', { required: true })}
          style={{ padding: '10px', width: '100%', marginBottom: '10px', boxSizing: 'border-box' }}
        />
        {errors.date && <span style={{ color: 'red' }}>This field is required</span>}

        <input
          type="text"
          placeholder="Category"
          {...register('category', { required: true })}
          style={{ padding: '10px', width: '100%', marginBottom: '10px', boxSizing: 'border-box' }}
        />
        {errors.category && <span style={{ color: 'red' }}>This field is required</span>}

        <select {...register('paymentMethod', { required: true })} style={{ padding: '10px', width: '100%', marginBottom: '10px', boxSizing: 'border-box' }}>
          <option value="cash">Cash</option>
          <option value="credit">Credit</option>
        </select>
        {errors.paymentMethod && <span style={{ color: 'red' }}>This field is required</span>}

        <button type="submit" style={{ padding: '10px', width: '100%', backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer' }}>
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
