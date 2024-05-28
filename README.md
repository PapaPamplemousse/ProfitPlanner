
### Structure du Projet

```plaintext
ProfitPlaner/
│
├── README.md
├── main.py
├── requirements.txt
├── data/
│   └── investment_report.txt
├── src/
│   ├── __init__.py
│   ├── investment.py
│   ├── calculator.py
│   └── plotter.py
└── tests/
    └── test_investment.py
```

### README.md

```markdown
# Investment Calculator

## Description
This project provides a Python script to calculate the future value of monthly investments over a specified period, given an annual return rate. It generates graphs and a detailed textual report of the investment data.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd investment_calculator
   ```

2. Install the required packages:
   ```bash
   pip install -r requirements.txt
   ```

## Usage
Run the script using:
```bash
python main.py
```

You will be prompted to enter:
- Monthly investment amount in euros
- Annual return rate (in %)
- Number of years

## Structure
- `main.py`: The entry point of the application.
- `src/investment.py`: Defines the `Investment` class.
- `src/calculator.py`: Contains the `Calculator` class for computing investment values.
- `src/plotter.py`: Contains the `Plotter` class for generating graphs.
- `data/investment_report.txt`: Output report file.
- `tests/test_investment.py`: Unit tests for the project.

## Future Features
- Adding more investment types
- Supporting different compounding intervals
- Enhanced graphical analysis
```

