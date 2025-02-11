// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the templating enginen
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a simple route
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
