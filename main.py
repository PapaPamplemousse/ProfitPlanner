from src.investment import Investment
from src.calculator import Calculator
from src.plotter import Plotter

def main():
    # Get user input
    monthly_investment = float(input("Enter the monthly investment amount in euros: "))
    annual_return_rate = float(input("Enter the annual return rate (in %): "))
    years = int(input("Enter the number of years: "))
    
    # Initialize Investment object
    investment = Investment(monthly_investment, annual_return_rate, years)
    
    # Calculate investment values
    calculator = Calculator(investment)
    future_value, annual_income, data = calculator.calculate_investment()

    # Generate report
    with open('data/investment_report.txt', 'w') as f:
        f.write(f"Future Value: {future_value:.2f} euros\n")
        f.write(f"Annual Income: {annual_income:.2f} euros\n")
        f.write("\nYearly Data:\n")
        for year, value in data.items():
            f.write(f"Year {year}: {value:.2f} euros\n")
    
    # Plot the investment growth
    plotter = Plotter(data)
    plotter.plot_investment()

if __name__ == "__main__":
    main()