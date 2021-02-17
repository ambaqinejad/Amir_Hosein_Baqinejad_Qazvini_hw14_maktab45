const express = require('express');
const path = require('path');

const loginRouter = require(path.join(__dirname, 'routes', 'login.js'))

const PORT = process.env.PORT || 3000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', loginRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})