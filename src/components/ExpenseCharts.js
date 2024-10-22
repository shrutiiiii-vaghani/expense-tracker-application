import React from 'react';
import { Pie, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register necessary components
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ExpenseCharts = ({ data }) => {
  const pieData = {
    labels: ['Category 1', 'Category 2', 'Category 3'],
    datasets: [
      {
        label: 'Expenses by Category',
        data: [100, 200, 300],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      }
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Monthly Expenses',
        data: [300, 400, 200, 500],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      }
    ],
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: '20px' }}>
      <div style={{ width: '300px', height: '300px' }}>
        <h2 style={{ textAlign: 'center' }}>Expenses Pie Chart</h2>
        <Pie data={pieData} />
      </div>

      <div style={{ width: '300px', height: '300px' }}>
        <h2 style={{ textAlign: 'center' }}>Expenses Line Chart</h2>
        <Line data={lineData} />
      </div>
    </div>
  );
};

export default ExpenseCharts;
