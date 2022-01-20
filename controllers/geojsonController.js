const db = require("../configurations/database");

async function currentMap(req, res) {
  res.json({ status: "successful" });
}

module.exports = { geojsonController: { currentMap } };
