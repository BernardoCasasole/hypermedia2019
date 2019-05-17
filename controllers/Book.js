'use strict';

var utils = require('../utils/writer.js');
var Book = require('../service/BookService');
let hardcoded = 34;

module.exports.booksGET = function booksGET (req, res, next) {
  /*/ Cookies that have not been signed
  console.log('/////////////////REEEEEEEQQQQQQQQQQQQQQQQQQQ///////////////////////////////////////////////')
  console.log(req)
  console.log('/////////////////REEEEEEESSSSSSSSSSSSSSSSSSS///////////////////////////////////////////////')
  console.log(res)
  //*/
  console.log("req session:");
  console.log(req.session);
  if(!req.session.loggedin) {
    req.session.loggedin = true;
    let randomNumber=Math.random().toString();
      randomNumber=randomNumber.substring(2,randomNumber.length);
      req.session.cookie = hardcoded;
} else if(req.session.cookie === hardcoded) {
  console.log("Greetings, number " + hardcoded + "!");
}else {
   req.session.loggedin = !req.session.loggedin;
}


  console.log(req.session.loggedin)
  //console.log("BC1 is: " + req.cookies.get("bookycookie1"));

  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Book.booksGET(offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBookById = function getBookById (req, res, next) {
  var bookId = req.swagger.params['bookId'].value;
  Book.getBookById(bookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
