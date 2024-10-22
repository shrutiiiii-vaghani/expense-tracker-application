import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

const ExpenseList = ({ expenses }) => {
  const [sortField, setSortField] = useState('date');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(0);
  const expensesPerPage = 10;

  const handleSort = (field) => {
    const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortOrder(order);
  };

  const sortedExpenses = [...expenses].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];

    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const paginatedExpenses = sortedExpenses.slice(
    currentPage * expensesPerPage,
    (currentPage + 1) * expensesPerPage
  );

  return (
    <>
      <table border={2} cellPadding={20} style={{ textAlign: 'center', margin: '20px auto', width: '80%' }}>
        <thead>
          <tr>
            <th onClick={() => handleSort('amount')}>Amount</th>
            <th onClick={() => handleSort('description')}>Description</th>
            <th onClick={() => handleSort('date')}>Date</th>
            <th onClick={() => handleSort('category')}>Category</th>
            <th onClick={() => handleSort('paymentMethod')}>Payment Method</th>
          </tr>
        </thead>
        <tbody>
          {paginatedExpenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.amount}</td>
              <td>{expense.description}</td>
              <td>{expense.date}</td>
              <td>{expense.category}</td>
              <td>{expense.paymentMethod}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={Math.ceil(sortedExpenses.length / expensesPerPage)}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
          pageClassName={'pagination-item'}
          previousClassName={'pagination-item'}
          nextClassName={'pagination-item'}
          breakClassName={'pagination-item'}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
        />
      </div>

      <style jsx>{`
        .pagination {
          list-style-type: none; /* Remove default list styling */
          padding: 0;
          display: flex; /* Ensure items are in a row */
        }
        .pagination-item {
          margin: 0 5px; /* Space between pagination items */
          cursor: pointer; /* Change cursor to pointer */
        }
        .active {
          font-weight: bold; /* Highlight active page */
        }
        .pagination-item:hover {
          text-decoration: underline; /* Optional: underline on hover */
        }
      `}</style>
    </>
  );
};

export default ExpenseList;
