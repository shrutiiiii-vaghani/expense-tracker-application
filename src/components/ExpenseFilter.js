import React, { useState } from 'react';

const ExpenseFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    category: '',
    date: '',
    paymentMethod: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    // Update the filters state with the new value
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    
    // Call onFilter with the updated filters
    onFilter(updatedFilters);
  };

  return (
    <div style={{ justifyContent: 'center', flexDirection: 'column', textAlign: 'center' }}>
      <input
        type="text"
        name="category"
        placeholder="Filter by category"
        onChange={handleFilterChange}
        style={{ margin: '20px', padding: '10px' }}
      />

      <input
        type="date"
        name="date"
        placeholder="Select Date"
        onChange={handleFilterChange}
        style={{ margin: '20px', padding: '10px' }}
      />

      <select name="paymentMethod" onChange={handleFilterChange} style={{ margin: '20px', padding: '10px' }}>
        <option value="">All Payment Methods</option>
        <option value="cash">Cash</option>
        <option value="credit">Credit</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
