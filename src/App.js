// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import InvestmentForm from './components/InvestmentForm';
import InvestmentChart from './components/InvestmentChart';
import Report from './components/Report';
import calculateFutureValue from './services/investmentCalculator';
import simulateScenarios from './services/scenarioSimulator';
import generateReport from './services/reportGenerator';

const App = () => {
  const [investmentData, setInvestmentData] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [reportData, setReportData] = useState(null);

  const handleCalculate = (formData) => {
    const futureValue = calculateFutureValue(formData.monthlyInvestment, formData.annualReturnRate, formData.years, formData.compounding);
    const scenarios = simulateScenarios(formData.monthlyInvestment, formData.years, formData.compounding);

    axios.post('/api/investment/calculate', formData)
      .then((response) => {
        const backendData = response.data;
        setInvestmentData({ ...formData, ...backendData });
        setChartData({
          labels: Array.from({ length: formData.years }, (_, i) => `Year ${i + 1}`),
          datasets: [
            {
              label: 'Optimistic Scenario',
              data: scenarios.optimisticScenario,
              borderColor: 'green',
              fill: false
            },
            {
              label: 'Moderate Scenario',
              data: scenarios.moderateScenario,
              borderColor: 'blue',
              fill: false
            },
            {
              label: 'Pessimistic Scenario',
              data: scenarios.pessimisticScenario,
              borderColor: 'red',
              fill: false
            }
          ]
        });
      })
      .catch((error) => {
        console.error('Erreur lors du calcul des investissements:', error);
      });
  };

  const handleExportPDF = () => {
    const reportText = generateReport(investmentData);
    setReportData(reportText);

    axios.post('/api/investment/report', { investmentData })
      .then((response) => {
        const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
        const pdfUrl = URL.createObjectURL(pdfBlob);
        window.open(pdfUrl);
      })
      .catch((error) => {
        console.error('Erreur lors de la génération du rapport PDF:', error);
      });
  };

  return (
    <div>
      <InvestmentForm onCalculate={handleCalculate} />
      {chartData && <InvestmentChart chartData={chartData} />}
      {reportData && <Report reportData={reportData} onExportPDF={handleExportPDF} />}
    </div>
  );
};

export default App;
