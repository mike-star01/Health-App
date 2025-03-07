const express = require('express');
const app = express();
const path = require('path');

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, '../public')));

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views')); // Ensure correct views path

// Routes
app.get('/', (req, res) => res.render('landing'));

app.get('/login', (req, res) => res.render('login'));

app.get('/sign-up', (req, res) => res.render('sign-up'));

app.get('/fitness', (req, res) => res.render('fitness'));

app.get('/settings', (req, res) => res.render('settings'));

app.get('/nutrients', (req, res) => res.render('nutrients'));

app.get('/contact', (req, res) => res.render('contact'));

// Export the app (important for Vercel)
module.exports = app;
