import unittest
from src.investment import Investment
from src.calculator import Calculator

class TestInvestmentCalculator(unittest.TestCase):
    def test_calculate_investment(self):
        investment = Investment(600, 10, 10)
        calculator = Calculator(investment)
        future_value, annual_income, data = calculator.calculate_investment()
        
        self.assertAlmostEqual(future_value, 122906.99, places=2)
        self.assertAlmostEqual(annual_income, 12290.70, places=2)
        self.assertEqual(len(data), 10)

if __name__ == '__main__':
    unittest.main()