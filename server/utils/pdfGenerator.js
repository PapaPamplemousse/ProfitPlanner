// server/utils/pdfGenerator.js
const PDFDocument = require('pdfkit');

const calculateInvestment = (monthlyInvestment, annualReturnRate, years, compounding) => {
  const n = {
    monthly: 12,
    quarterly: 4,
    semiannually: 2,
    annually: 1
  }[compounding];

  const rate = annualReturnRate / 100 / n;
  const periods = years * n;
  const futureValue = monthlyInvestment * ((Math.pow(1 + rate, periods) - 1) / rate) * (1 + rate);
  const totalInvested = monthlyInvestment * 12 * years;
  const totalInterest = futureValue - totalInvested;
  const annualIncome = totalInterest / years;

  return { futureValue, totalInvested, totalInterest, annualIncome };
};

const generatePDFReport = (investmentData, callback) => {
  const doc = new PDFDocument();
  let buffers = [];
  doc.on('data', buffers.push.bind(buffers));
  doc.on('end', () => {
    let pdfData = Buffer.concat(buffers);
    callback(pdfData);
  });

  doc.fontSize(16).text('Rapport d\'Investissement', { align: 'center' });
  doc.moveDown();
  doc.fontSize(12).text(`Montant total investi: ${investmentData.totalInvested} €`);
  doc.text(`Montant total des intérêts gagnés: ${investmentData.totalInterest} €`);
  doc.text(`Valeur future: ${investmentData.futureValue} €`);
  doc.text(`Revenus annuels: ${investmentData.annualIncome} €`);

  doc.end();
};

module.exports = { calculateInvestment, generatePDFReport };
