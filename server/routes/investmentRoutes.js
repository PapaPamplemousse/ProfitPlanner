// server/routes/investmentRoutes.js
const express = require('express');
const { calculateInvestment, generatePDFReport } = require('../utils/pdfGenerator');

const router = express.Router();

router.post('/calculate', (req, res) => {
  const { monthlyInvestment, annualReturnRate, years, compounding } = req.body;
  const result = calculateInvestment(monthlyInvestment, annualReturnRate, years, compounding);
  res.json(result);
});

router.post('/report', (req, res) => {
  const { investmentData } = req.body;
  generatePDFReport(investmentData, (pdf) => {
    res.setHeader('Content-Type', 'application/pdf');
    res.send(pdf);
  });
});

module.exports = router;
