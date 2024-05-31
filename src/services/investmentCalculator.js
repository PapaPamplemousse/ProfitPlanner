// src/services/investmentCalculator.js
const calculateFutureValue = (monthlyInvestment, annualReturnRate, years, compounding) => {
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
  
  export default calculateFutureValue;
  