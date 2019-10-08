const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../templates/views'));
hbs.registerPartials(path.join(__dirname, '../templates/partials'));

// Setup static directory to serve static content
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Anthony'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'Anthony'
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'Anthony',
    message: 'Hello World'
  });
});

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Sunny',
    location: 'Toronto'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
