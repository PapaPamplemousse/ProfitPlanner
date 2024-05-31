// src/components/Report.js
import React from 'react';

const Report = ({ reportData, onExportPDF }) => {
  return (
    <div className="report-container">
      <h2>Rapport d'Investissement</h2>
      <p>Montant total investi: {reportData.totalInvested} €</p>
      <p>Montant total des intérêts gagnés: {reportData.totalInterest} €</p>
      <p>Valeur future: {reportData.futureValue} €</p>
      <p>Revenus annuels: {reportData.annualIncome} €</p>
      <button onClick={onExportPDF}>Exporter en PDF</button>
    </div>
  );
};

export default Report;
