// src/components/InvestmentChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const InvestmentChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <Line data={chartData} options={{ responsive: true }} />
    </div>
  );
};

export default InvestmentChart;
