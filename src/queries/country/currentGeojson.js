const { toGeojson } = require("../conversion")

async function currentGeojson() {
    let q = await db.raw(
        `SELECT json_agg(json_build_object('type', 'Feature', 'id', cast(state_table.id as varchar),
        'properties', json_build_object('name', name, 'cases', cases, 'deaths', deaths),
                                       'geometry', json_build_object('type', geotype, 'coordinates', coordinates)))
    FROM state_table
    JOIN state_cases_table
    ON state_table.id = state_cases_table.state_id
    WHERE date = current_date - interval '2 days'`
    )

    return toGeojson(q.rows)

}

module.exports = { currentGeojson }