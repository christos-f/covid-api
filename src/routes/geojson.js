const express = require("express");

//require queries 
const { currentGeojson } = require("../utils/query")

function getGeojsonRoutes(req, res) {
  const router = express.Router();
  router.get("/current", currentMap);
  return router;
}

async function currentMap(req, res) {
  const result = await currentGeojson();

  return res.json(result);
}


module.exports = { getGeojsonRoutes };

