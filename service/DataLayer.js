let sqlDb = require("../db/knex.js");

let {authorsDbSetup} = require("./AuthorService");
let {booksDbSetup } = require("./BookService");
let {eventsDbSetup} =  require("./EventService");
let {usersDbSetup} =  require("./UserService");
let {cartsDbSetup} =  require("./CartService");


function setupDataLayer() {
  console.log("Setting up data layer");
  return allDbSetup(sqlDb);
}

let allDbSetup = function allDbSetup(db) {
  console.log("Starting DB setup...")
  authorsDbSetup(db);
  booksDbSetup(db);
  eventsDbSetup(db);
  usersDbSetup(db);
  return cartsDbSetup(db);
}



module.exports = { database: sqlDb, setupDataLayer };
