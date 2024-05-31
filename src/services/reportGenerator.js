// src/services/reportGenerator.js
import axios from 'axios';

const generateReport = (investmentData) => {
  const reportText = `
    Montant total investi: ${investmentData.totalInvested} €
    Montant total des intérêts gagnés: ${investmentData.totalInterest} €
    Valeur future: ${investmentData.futureValue} €
    Revenus annuels: ${investmentData.annualIncome} €
  `;

  axios.post('/api/investment/report', { investmentData })
    .then((response) => {
      const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
      const pdfUrl = URL.createObjectURL(pdfBlob);
      window.open(pdfUrl);
    })
    .catch((error) => {
      console.error('Erreur lors de la génération du rapport PDF:', error);
    });

  return reportText;
};

export default generateReport;
