import numpy as np

class Calculator:
    def __init__(self, investment):
        self.investment = investment
    
    def calculate_investment(self):
        P = self.investment.monthly_investment
        r = self.investment.annual_return_rate / 12  # Monthly return rate
        n = self.investment.years * 12  # Total number of payments
        
        # Future value formula for annuities
        future_value = P * ((1 + r)**n - 1) / r
        
        # Annual income from the investment after the period
        annual_income = future_value * self.investment.annual_return_rate
        
        # Yearly data
        data = {}
        for year in range(1, self.investment.years + 1):
            n_year = year * 12
            value = P * ((1 + r)**n_year - 1) / r
            data[year] = value
        
        return future_value, annual_income, data