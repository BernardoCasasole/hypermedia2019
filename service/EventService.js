'use strict';

let db;

exports.eventsDbSetup = function(database) {
  db = database;
  console.log("Checking if events table exists...");
  return database.schema.hasTable("events").then(exists => {
    if (!exists) {
      console.log("It doesn't!");
    } else {
      console.log('Ok.');
    }
  });
}

/**
 * Events in schedule
 * List of events in schedule
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.eventsGET = function(offset,limit) {
  if( limit === undefined || limit<=0 || limit === NaN) {
    limit = 20
  }
  return db('events')
    .limit(limit)
    .offset(offset);
}


/**
 * Find event by ID
 * Returns a specific event
 *
 * eventId Long ID of event to register in
 * returns Event
 **/
exports.findEventById = function(eventId) {
  return db.select()
  .from('events')
  .where('id', eventId)
}

/**
 * Find events by category
 * Returns a list of events by category
 *
 * category String category of event to register in
 * returns Event
 **/
exports.findEventByCategory = function(category) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 1,
  "name" : "Manzoni Presentation",
  "presentedBook" : [ {
    "id" : 0,
    "title" : "I promessi sposi",
    "author" : "Alessandro Manzoni",
    "price" : {
      "value" : 10,
      "currency" : "eur"
    }
  } ],
  "date" : "1/6/2019",
  "subscribers" : "1"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find events by date
 * Returns a list of events by date
 *
 * date String category of event to register in
 * returns Event
 **/
exports.findEventByDate = function(date) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 1,
  "name" : "Manzoni Presentation",
  "presentedBook" : [ {
    "id" : 0,
    "title" : "I promessi sposi",
    "author" : "Alessandro Manzoni",
    "price" : {
      "value" : 10,
      "currency" : "eur"
    }
  } ],
  "date" : "1/6/2019",
  "subscribers" : "1"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

/**
 * Find event by name
 * Returns a specific event by name
 *
 * eventName String name of event to register in
 * returns Event
 **/
exports.findEventByName = function(eventName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 1,
  "name" : "Manzoni Presentation",
  "presentedBook" : [ {
    "id" : 0,
    "title" : "I promessi sposi",
    "author" : "Alessandro Manzoni",
    "price" : {
      "value" : 10,
      "currency" : "eur"
    }
  } ],
  "date" : "1/6/2019",
  "subscribers" : "1"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}
