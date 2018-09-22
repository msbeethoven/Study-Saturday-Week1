// Require Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');


// Routes
const Student = require('./routes/student');
const touch = require('./routes/touch')

// Init App
const app = express();

// Basic Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/student', Student);
app.use('/', touch);

// Err-handling
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Listen on server

app.listen(3000, () => {
  console.log('Server is listening on port 3000!');
});
