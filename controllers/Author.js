'use strict';

var utils = require('../utils/writer.js');
var Author = require('../service/AuthorService');

module.exports.authorsGET = function authorsGET (req, res, next) {
  let offset = req.swagger.params['offset'].value || 0;
  let limit = req.swagger.params['limit'].value || 20;
  Author.authorsGET(offset,limit)
    .then(function (response) {
      if(response[0] === undefined)
        utils.writeJson(res, response, 404)
      else
        utils.writeJson(res, response, 200)
    })
    .catch(function (response) {
      utils.writeJson(res, response, 500);
    });
};

module.exports.getAuthorById = function getAuthorById (req, res, next) {
  var authorId = req.swagger.params['authorId'].value;
  Author.getAuthorById(authorId)
    .then(function (response) {
      if(response[0] === undefined) {
        utils.writeJson(res, response, 404);
      } else {
        utils.writeJson(res, response, 200);
      }
    })
    .catch(function (response) {
      utils.writeJson(res, response, 500);
    });
};

module.exports.getAuthorByName = function getAuthorByName (req, res, next) {
  var name = req.swagger.params['name'].value;
  Author.getAuthorByName(name)
    .then(function (response) {
      if(response[0] === undefined)
        utils.writeJson(res, response, 404);
      else
        utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 500);
    });
};
