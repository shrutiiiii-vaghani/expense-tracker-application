import React, { createContext, useState } from 'react';

export const ExpenseContext = createContext();

const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const filterExpenses = (filters) => {
    // Implement filtering logic here
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, filterExpenses }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
