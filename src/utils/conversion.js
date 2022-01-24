function toGeojson(query) {
  const geojson = {
    type: "FeatureCollection",
  };

  const array = query[0].json_agg;

  geojson.features = array;

  return geojson;
}

module.exports = { toGeojson };
