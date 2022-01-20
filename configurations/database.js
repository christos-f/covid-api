const { DATABASE_URI } = require("./credentials");

module.exports = db = require("knex")({
  client: "pg",
  connection: process.env.DATABASE_URI,
});
