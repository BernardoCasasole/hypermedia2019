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
    .offset(offset)
    .leftJoin('authors', 'events.author', '=', 'authors.id');
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
exports.findEventByCategory = function(category, limit, offset) {
  return db.select()
  .from('events')
  .where('category', category)
  .limit(limit)
  .offset(offset);
}


/**
 * Find events by date
 * Returns a list of events by date
 *
 * date String category of event to register in
 * returns Event
 **/
exports.findEventByMonth = function(month, year, limit, offset) {
  return db.select()
  .from('events')
  .whereRaw(`EXTRACT(MONTH FROM date::date) = ?`, [month])
  .andWhereRaw(`EXTRACT(YEAR FROM date::date) = ?`, [year])
  //.whereBetween('date', [date1, date2])
  .limit(limit)
  .offset(offset);
}
/*
.where('date', '>=', date1)
  .andWhere('date', '<=', date2)
*/

/**
 * Find event by name
 * Returns a specific event by name
 *
 * eventName String name of event to register in
 * returns Event
 **/
exports.findEventByName = function(eventName) {
  let limit = 20;
  let offset = 0;
  return db.select()
  .from('events')
  .where('eventName', eventName)
  .limit(limit)
  .offset(offset);
}
