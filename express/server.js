'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.get("/", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

module.exports = app;
module.exports.handler = serverless(app);
