import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ExpenseProvider from './context/ExpenseProvider';

ReactDOM.render(
  <React.StrictMode>
    <ExpenseProvider>
      <App />
    </ExpenseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
