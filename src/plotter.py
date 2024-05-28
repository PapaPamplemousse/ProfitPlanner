import matplotlib.pyplot as plt

class Plotter:
    def __init__(self, data):
        self.data = data
    
    def plot_investment(self):
        years = list(self.data.keys())
        values = list(self.data.values())
        
        plt.figure(figsize=(10, 6))
        plt.plot(years, values, marker='o')
        plt.title("Investment Growth Over Time")
        plt.xlabel("Years")
        plt.ylabel("Value in Euros")
        plt.grid(True)
        plt.show()