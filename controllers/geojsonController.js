const { currentGeojson } = require("../utils/query")

async function currentMap(req, res) {
  const q = await currentGeojson();

  res.json(q);
}

module.exports = {
  geojsonController: {
    currentMap,
  },
};
