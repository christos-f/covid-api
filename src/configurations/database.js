const { 
  POSTGRES_HOST,
   POSTGRES_PORT, 
   POSTGRES_USER, 
   POSTGRES_PASSWORD, 
   POSTGRES_DB } = require("./credentials");

// module.exports = db = require('knex')({
//   client: "pg" ,
//   connection: {
//     host : POSTGRES_HOST,
//     port : POSTGRES_PORT,
//     user : POSTGRES_USER,
//     password : POSTGRES_PASSWORD,
//     database : POSTGRES_DB
//   }
// });


module.exports = db = require('knex')({
  client: "pg" ,
  connection: {
    host : "db",
    port : 5432,
    user : "postgres",
    password : "example",
    database : "covid_db"
  }
});
