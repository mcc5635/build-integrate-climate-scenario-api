const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Root route to display a welcome message
app.get('/', (req, res) => {
  res.send('Welcome to the Climate Data API!');
});

// API route to retrieve data
app.get('/api/data', (req, res) => {
  res.json(require('./data.json'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
