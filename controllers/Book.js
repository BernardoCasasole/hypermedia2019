'use strict';

var utils = require('../utils/writer.js');
var Book = require('../service/BookService');
let defaultLimit = 20;

module.exports.booksGET = function booksGET (req, res, next) {
  let offset = req.swagger.params['offset'].value || 0;
  let limit = req.swagger.params['limit'].value || 20;
  Book.booksGET(offset,limit)
    .then(function (response) {
      utils.writeJson(res, response.rows);
    })
    .catch(function (response) {
      utils.writeJson(res, response.rows);
    });
};

module.exports.getBookById = function getBookById (req, res, next) {
  var bookId = req.swagger.params['bookId'].value;
  Book.getBookById(bookId)
    .then(function (response) {
      utils.writeJson(res, response.rows);
    })
    .catch(function (response) {
      utils.writeJson(res, response.rows);
    });
};

module.exports.getBookBySoldCopies = function getBookBySoldCopies (req, res, next) {
  let offset = req.swagger.params['offset'].value || 0;
  let limit = req.swagger.params['limit'].value || 20;
  if(typeof limit  === "undefined") {
    limit = defaultLimit;
  }
  Book.getBookBySoldCopies(offset,limit)
    .then(function (response) {
      utils.writeJson(res, response.rows);
    })
    .catch(function (response) {
      utils.writeJson(res, response.rows);
    });
};

module.exports.getBooksByAuthor = function getBooksByAuthor (req, res, next) {
  var author = req.swagger.params['author'].value;
  let offset = req.swagger.params['offset'].value || 0;
  let limit = req.swagger.params['limit'].value || 20;
  Book.getBooksByAuthor(author,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response.rows);
    })
    .catch(function (response) {
      utils.writeJson(res, response.rows);
    });
};

module.exports.getBooksByGenre = function getBooksByGenre (req, res, next) {
  var genre = req.swagger.params['genre'].value;
  let offset = req.swagger.params['offset'].value || 0;
  let limit = req.swagger.params['limit'].value || 20;
  Book.getBooksByGenre(genre,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response.rows);
    })
    .catch(function (response) {
      utils.writeJson(res, response.rows);
    });
};

module.exports.getBooksByPublicationDate = function getBooksByPublicationDate (req, res, next) {
  var date = req.swagger.params['date'].value;
  let offset = req.swagger.params['offset'].value || 0;
  let limit = req.swagger.params['limit'].value || 20;
  Book.getBooksByPublicationDate(date,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response.rows);
    })
    .catch(function (response) {
      utils.writeJson(res, response.rows);
    });
};

module.exports.getBooksByTheme = function getBooksByTheme (req, res, next) {
  var theme = req.swagger.params['theme'].value;
  let offset = req.swagger.params['offset'].value || 0;
  let limit = req.swagger.params['limit'].value || 20;
  Book.getBooksByTheme(theme,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response.rows);
    })
    .catch(function (response) {
      utils.writeJson(res, response.rows);
    });
};

module.exports.getBooksByTitle = function getBooksByTitle (req, res, next) {
  var title = req.swagger.params['title'].value;
  let offset = req.swagger.params['offset'].value || 0;
  let limit = req.swagger.params['limit'].value || 20;
  Book.getBooksByTitle(title,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response.rows);
    })
    .catch(function (response) {
      utils.writeJson(res, response.rows);
    });
};

module.exports.getSponsoredBooks = function getSponsoredBooks (req, res, next) {
  let offset = req.swagger.params['offset'].value || 0;
  let limit = req.swagger.params['limit'].value || 20;
  Book.getSponsoredBooks(offset,limit)
    .then(function (response) {
      utils.writeJson(res, response.rows);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.getBooksBySoldCopiesInMonth = function getBooksBySoldCopiesInMonth(req, res, next) {
  let offset = req.swagger.params['offset'].value || 0;
  let limit = req.swagger.params['limit'].value || 20;
  let month = req.swagger.params['month'].value;
  let year = req.swagger.params['year'].value;
  Book.getBooksBySoldCopiesInMonth(month, year, offset,limit)
    .then(function (response) {
      utils.writeJson(res, response.rows);
    })
    .catch(function (response) {
      utils.writeJson(res, response.rows);
    });
}