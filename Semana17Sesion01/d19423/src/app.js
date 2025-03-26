// sample express app created with npx express-generator --no-view src
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const personsRouter = require('./routes/persons');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/persons', personsRouter);

module.exports = app;