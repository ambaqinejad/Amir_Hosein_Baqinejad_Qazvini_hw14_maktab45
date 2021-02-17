const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const loginRouter = require(path.join(__dirname, 'routes', 'login.js'))
const signupRouter = require(path.join(__dirname, 'routes', 'signup.js'))
const userRouter = require(path.join(__dirname, 'routes', 'user.js'))

const PORT = process.env.PORT || 3000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/signup', signupRouter);
app.use('/user', userRouter);
app.use('/', loginRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})