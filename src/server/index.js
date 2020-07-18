const path = require('path');

const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 4200;

// Logging middleware
app.use(morgan('combined', {
  skip: function (req, res) { return res.statusCode < 400; },
}));

// Point static path to dist
app.use(express.static(path.join(__dirname, '../../dist')));

// Serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
  console.log('Logging errors only...');
});
