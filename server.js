const express = require('express');
const app = express();
const path = require('path');

//Static files like CSS, JS
app.use(express.static(path.join(__dirname, 'public')));


// Set the view engine to EJS
app.set('view engine', 'ejs');

// Route for the home page
app.get('/', (req, res) => {
  res.render('fitness');       // Render the EJS template
});


// Route for the settings page
app.get('/settings', (req, res) => {
  res.render('settings');       // Render the EJS template
});

// Route for the nutrients page
app.get('/nutrients', (req, res) => {
  res.render('nutrients');       // Render the EJS template
});

// Route for the Contact page
app.get('/contact', (req, res) => {

  res.render('contact');       // Render the EJS template
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

