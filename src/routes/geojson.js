const express = require("express");

//require queries 
const { currentGeojson } = require("../queries/country/currentGeojson");
const { stateCurrentGeojson } = require("../queries/state/currentGeojson");

function getGeojsonRoutes(req, res) {
  const router = express.Router();
  router.get("/current", currentMap);
  router.get("/current/:state", stateCurrentMap)
  return router;
}

async function currentMap(req, res) {
  const result = await currentGeojson();

  return res.json(result);
}

async function stateCurrentMap(req, res) {
  const { state } = req.params
  const result = await stateCurrentGeojson(state);

  return res.json(result)
}


module.exports = { getGeojsonRoutes };

