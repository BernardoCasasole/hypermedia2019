'use strict';

var utils = require('../utils/writer.js');
var Event = require('../service/EventService');

module.exports.eventsGET = function eventsGET (req, res, next) {
  let offset = req.swagger.params['offset'].value || 0;
  let limit = req.swagger.params['limit'].value || 20;
  Event.eventsGET(offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findEventById = function findEventById (req, res, next) {
  var eventId = req.swagger.params['eventId'].value;
  Event.findEventById(eventId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findEventByCategory = function findEventByCategory (req, res, next) {
  let category = req.swagger.params['category'].value;
  let offset = req.swagger.params['offset'].value || 0;
  let limit = req.swagger.params['limit'].value || 20;
  Event.findEventByCategory(category, limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findEventByMonth = function findEventByMonth (req, res, next) {
  let month = req.swagger.params['month'].value;
  let year = req.swagger.params['year'].value;
  let offset = req.swagger.params['offset'].value || 0;
  let limit = req.swagger.params['limit'].value || 20;
  Event.findEventByMonth(month, year, limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findEventsByName = function findEventsByName (req, res, next) {
  var eventName = req.swagger.params['eventName'].value;
  let offset = req.swagger.params['offset'].value || 0;
  let limit = req.swagger.params['limit'].value || 20;
  console.log(eventName)

  Event.findEventsByName(eventName, offset, limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
