// src/components/InvestmentForm.js
import React, { useState } from 'react';

const InvestmentForm = ({ onCalculate }) => {
  const [monthlyInvestment, setMonthlyInvestment] = useState('');
  const [annualReturnRate, setAnnualReturnRate] = useState('');
  const [years, setYears] = useState('');
  const [compounding, setCompounding] = useState('monthly');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate({
      monthlyInvestment: parseFloat(monthlyInvestment),
      annualReturnRate: parseFloat(annualReturnRate),
      years: parseInt(years),
      compounding
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Montant du placement mensuel (€):
        <input
          type="number"
          value={monthlyInvestment}
          onChange={(e) => setMonthlyInvestment(e.target.value)}
          required
        />
      </label>
      <label>
        Taux de rendement annuel (%):
        <input
          type="number"
          value={annualReturnRate}
          onChange={(e) => setAnnualReturnRate(e.target.value)}
          required
        />
      </label>
      <label>
        Nombre d'années d'investissement:
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          required
        />
      </label>
      <label>
        Fréquence de capitalisation:
        <select
          value={compounding}
          onChange={(e) => setCompounding(e.target.value)}
        >
          <option value="monthly">Mensuelle</option>
          <option value="quarterly">Trimestrielle</option>
          <option value="semiannually">Semestrielle</option>
          <option value="annually">Annuelle</option>
        </select>
      </label>
      <button type="submit">Calculer</button>
    </form>
  );
};

export default InvestmentForm;
