// Third party modules
const express = require('express');

// Nodejs modules
const path = require('path');

// My own modules
const homeRouter = require(path.join(__dirname, 'routes', 'home.js'));
const contactRouter = require(path.join(__dirname, 'routes', 'contact.js'));
const aboutRouter = require(path.join(__dirname, 'routes', 'about.js'));

const app = express();

// configuration
const PORT = process.env.PORT || 3000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// routes
app.use('/', homeRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})