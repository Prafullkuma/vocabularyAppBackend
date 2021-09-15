const express = require('express');
const oxferdRouter = express.Router();
const { httpAddWord, httpGetAllWords,httpSearchWord} = require('./oxferd.controller');


oxferdRouter.get('/addWord',httpAddWord)
oxferdRouter.get('/getAllWords',httpGetAllWords )
oxferdRouter.get('/search',httpSearchWord)
module.exports = oxferdRouter;