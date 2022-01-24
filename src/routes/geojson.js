const express = require("express");
// Require controller for routes
const { geojsonController } = require("../controllers/geojsonController");

function getGeojsonRoutes(req, res) {
  const router = express.Router();
  router.get("/current", geojsonController.currentMap);
  router.get("/ping", geojsonController.ping)
  return router;
}

module.exports = { getGeojsonRoutes };

