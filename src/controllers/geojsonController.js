const { currentGeojson } = require("../utils/query")

async function currentMap(req, res) {
  const result = await currentGeojson();

  return res.json(result);
}

async function ping(req, res) {
  return res.json({message:"ping"})
}


module.exports = {
  geojsonController: {
    currentMap,
    ping
  },
};