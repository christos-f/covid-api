const { currentGeojson } = require("../utils/query")

async function currentMap(req, res) {
  const result = await currentGeojson();

  res.json(result);
}

module.exports = {
  geojsonController: {
    currentMap,
  },
};
