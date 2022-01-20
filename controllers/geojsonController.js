const db = require("../configurations/database");

async function defaultMap(req, res) {
  res.json({ status: "successful" });
}

module.exports = { geojsonController: { defaultMap } };
