const express = require('express')
const oxferdRouter = require('./oxferd/oxferd.router');

const api = express.Router();


api.use("/oxferd",oxferdRouter);

module.exports = api;