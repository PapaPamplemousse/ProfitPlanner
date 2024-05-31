// src/services/scenarioSimulator.js
const simulateScenarios = (monthlyInvestment, years, compounding) => {
    const optimisticRate = 8;
    const moderateRate = 5;
    const pessimisticRate = 2;
  
    const optimisticScenario = calculateFutureValue(monthlyInvestment, optimisticRate, years, compounding);
    const moderateScenario = calculateFutureValue(monthlyInvestment, moderateRate, years, compounding);
    const pessimisticScenario = calculateFutureValue(monthlyInvestment, pessimisticRate, years, compounding);
  
    return { optimisticScenario, moderateScenario, pessimisticScenario };
  };
  
  export default simulateScenarios;
  