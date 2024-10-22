import React, { useContext } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseCharts from './components/ExpenseCharts';
import { ExpenseContext } from './context/ExpenseProvider';

const App = () => {
  const { expenses, addExpense, filterExpenses } = useContext(ExpenseContext);

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Expense Tracker</h1>
      <ExpenseFilter onFilter={filterExpenses} />
      <ExpenseForm onAddExpense={addExpense}  />
      <ExpenseList expenses={expenses} />
      <ExpenseCharts expenses={expenses} />
    </div>
  );
};

export default App;
