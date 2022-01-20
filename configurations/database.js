const { DATABASE_URI } = require("./credentials");

module.exports = db = require("knex")({
  client: "pg",
  connection: DATABASE_URI,
});
