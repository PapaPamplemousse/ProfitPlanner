// server/app.js
const express = require('express');
const bodyParser = require('body-parser');
const investmentRoutes = require('./routes/investmentRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api/investment', investmentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
