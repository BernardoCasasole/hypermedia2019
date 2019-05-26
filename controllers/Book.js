'use strict';

var utils = require('../utils/writer.js');
var Book = require('../service/BookService');
let defaultLimit = 20;

module.exports.booksGET = function booksGET (req, res, next) {
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

module.exports.getBookBySoldCopies = function getBookBySoldCopies (req, res, next) {
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  if(typeof limit  === "undefined") {
    limit = defaultLimit;
  }
  Book.getBookBySoldCopies(offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBooksByAuthor = function getBooksByAuthor (req, res, next) {
  var author = req.swagger.params['author'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Book.getBooksByAuthor(author,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBooksByGenre = function getBooksByGenre (req, res, next) {
  var genre = req.swagger.params['genre'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Book.getBooksByGenre(genre,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBooksByPublicationDate = function getBooksByPublicationDate (req, res, next) {
  var date = req.swagger.params['date'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Book.getBooksByPublicationDate(date,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBooksByTheme = function getBooksByTheme (req, res, next) {
  var theme = req.swagger.params['theme'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Book.getBooksByTheme(theme,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBooksByTitle = function getBooksByTitle (req, res, next) {
  var title = req.swagger.params['title'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Book.getBooksByTitle(title,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSponsoredBooks = function getSponsoredBooks (req, res, next) {
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Book.getSponsoredBooks(offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.getBooksBySoldCopiesInMonth = function getBooksBySoldCopiesInMonth(req, res, next) {
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  let month = req.swagger.params['month'].value;
  let year = req.swagger.params['year'].value;
  Book.getBooksBySoldCopiesInMonth(month, year, offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
}