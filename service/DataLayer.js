let sqlDb = require("../db/knex.js");

let { booksDbSetup } = require("./BookService");

function setupDataLayer() {
  console.log("Setting up data layer");
  return booksDbSetup(sqlDb);
}

module.exports = { database: sqlDb, setupDataLayer };
