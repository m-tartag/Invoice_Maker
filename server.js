const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const chalk = require('chalk');

// init app
const app = express();
const port = process.env.PORT || 5000;

// init middleware

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () =>
  console.log(chalk.blue.inverse(`Listening on port ${port}`))
);