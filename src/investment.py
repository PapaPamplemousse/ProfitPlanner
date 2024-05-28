class Investment:
    def __init__(self, monthly_investment, annual_return_rate, years):
        self.monthly_investment = monthly_investment
        self.annual_return_rate = annual_return_rate / 100  # Convert percentage to decimal
        self.years = years

    def __str__(self):
        return (f"Monthly Investment: {self.monthly_investment} euros\n"
                f"Annual Return Rate: {self.annual_return_rate * 100}%\n"
                f"Years: {self.years}")