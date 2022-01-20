const express = require("express");
// Require controller for routes
const { geojsonController } = require("../controllers/geojsonController");

function getGeojsonRoutes(req, res) {
  const router = express.Router();
  router.get("/current", geojsonController.currentMap);
  return router;
}

module.exports = { getGeojsonRoutes };

