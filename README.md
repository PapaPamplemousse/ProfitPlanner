# ProfitPlanner

ProfitPlanner is an interactive web application designed to help users calculate the future value of their monthly investments. The application allows users to simulate different return scenarios and generate detailed reports with visualizations.

## Features

- Input form to enter the monthly investment amount, annual return rate, number of investment years, and compounding frequency.
- Calculation of the future value of investments with compound interest.
- Calculation of annual income generated after the investment period.
- Charts showing the growth of investments over time.
- Comparison of different return scenarios (optimistic, pessimistic, moderate).
- Detailed report including total amount invested, total interest earned, future value, and annual income.
- Export the report in PDF format.

## Technologies Used

### Frontend

- HTML/CSS
- JavaScript (ES6+)
- React.js
- Chart.js

### Backend

- Node.js
- Express.js
- pdfkit

## Installation

1. Clone the repository: `git clone https://github.com/youraccount/profitplanner.git`
2. Install dependencies: `npm install`

## Usage

1. Start the backend server: `npm run server`
2. Start the frontend application: `npm start`
3. Access the application at `http://localhost:3000`

## Deployment

The application can be deployed using Docker. Build the Docker image with `docker build -t profitplanner-app .` and run a container with `docker run -p 3000:3000 profitplanner-app`.

## Contributors

- [PapaPamplemousse](https://github.com/PapaPamplemousse)

## License

This project is licensed under the [GNU GENERAL PUBLIC LICENSE](LICENSE).