const { toGeojson } = require("./conversion")


async function currentGeojson() {
  const q = await db
    .select(
      db.raw(`json_agg(json_build_object('type', 'Feature', 'id', id, 'properties',
  json_build_object('name', name, 'cases', cases, 'deaths', deaths),
      'geometry', json_build_object('type', geotype, 'coordinates', coordinates)))`)
    )
    .from(
      db("state_table")
        .join("state_cases_table", {
          "state_table.id": "state_cases_table.state_id",
        })
        .select(
          "state_table.id",
          "name",
          "geotype",
          "cases",
          "deaths",
          "coordinates"
        )
        .orderBy("date", "desc")
        .limit(52)
        .as("T")
    );

  return toGeojson(q);
}

module.exports = { currentGeojson };
