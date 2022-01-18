const { performance } = require('perf_hooks');



const pg = require('knex')({
    client: 'pg',
    connection: "postgresql://postgres:christos@localhost/covid_db",
  });


// pg.select().table('state_table').then(d => console.log(d))

// pg.select('id', 'name', 'geotype').from('state_table')
// .then(data => console.log(data))


// pg.join('state_cases_table', 'state_table.id', '=', 'state_cases_table.state_id')
// .select("state_table.id", "state_name", "geotype", "coordinates").sum("cases as total_cases")
// .from("state_table")
// .groupBy("state_table.id", "state_name")
// .then(d => console.log(d))
// .catch(err => console.log(err))


// pg.join('state_cases_table', 'state_table.id', '=', 'state_cases_table.state_id')
// .select(pg.raw(`json_build_object('type', 'Feature', 'id', state_table.id, 'properties',
// json_build_object('name', name, 'cases', cases, 'deaths', deaths), 'geometry',
//    json_build_object('type', geotype, 'coordinates', coordinates))`))
// .from("state_table")
// .orderBy("date", "desc")
// .limit(52)
// .then(d => console.log(d))


// .then(d => {
//   d.forEach(e => {
//     final.features.push({
//       type: "Feature",
//       id: e.id,
//       properies: {
//         name: e.state_name, cases: e.cases, deaths: e.deaths
//       },
//       geometry: {
//         type: e.geotype,
//         coordinates: e.coordinates
//       }
//     })
//   })
//   return d
// }
// ).then(res => console.log(res))

async function main() {

  const final = { 
    type: "FeatureCollection",
    features: [
  
    ]
  }

  const q = await pg.join('state_cases_table', 'state_table.id', '=', 'state_cases_table.state_id')
  .select("state_table.id", "state_name", "geotype", "coordinates", "cases", "deaths")
  .from("state_table")
  .orderBy("date", "desc")
  .limit(52)


  q.forEach(e => {
      final.features.push(
        {
          type: "Feature",
          id: e.id,
          properties: {
            name: e.state_name, cases: e.cases, deaths: e.deaths
          },
          geometry: {
            type: e.geotype,
            coordinates: e.coordinates
          }
        }
      )
  });

  // console.log(final)

}

// const start = performance.now()
// main().then(() => {
//   const end = performance.now()
// console.log(`Call to doSomething took ${end - start} milliseconds`)
// })

// pg.raw("SELECT json_build_object('type', 'Feature')")
// .then(d => console.log(d.rows))


// pg.raw("SELECT json_build_object('name', 'CHristos') as f ").then(d => console.log(d.rows))

// pg("state_table as f").limit(5).then(d => console.log(d))



async function main2() {
const q  = await pg.join('state_cases_table', 'state_table.id', '=', 'state_cases_table.state_id')
.select(pg.raw(`json_build_object('type', 'Feature', 'id', state_table.id, 'properties',
json_build_object('name', name, 'cases', cases, 'deaths', deaths), 'geometry',
   json_build_object('type', geotype, 'coordinates', coordinates))`))
.from("state_table")
.orderBy("date", "desc")
.limit(52)
}

const start = performance.now()
main2().then(() => {
  const end = performance.now()
console.log(`Call to doSomething took ${end - start} milliseconds`)
})