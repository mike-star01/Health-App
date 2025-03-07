const express = require('express');
const app = express();
const path = require('path');

//Static files like CSS, JS
app.use(express.static(path.join(__dirname, 'public')));


// Set the view engine to EJS
app.set('view engine', 'ejs');

// Route for the landing page
app.get('/', (req, res) => {
  res.render('landing');       // Render the EJS template
});


// Route for the login page
app.get('/login', (req, res) => {
  res.render('login');       // Render the EJS template
});

// Route for the sign up page
app.get('/sign-up', (req, res) => {
  res.render('sign-up');       // Render the EJS template
});

// Route for the dashboard page
app.get('/fitness', (req, res) => {
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

