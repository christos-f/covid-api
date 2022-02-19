const { Router } = require("express")
// Require sperarte route files here
const {getGeojsonRoutes} = require("./geojson")


function getRoutes() {
    const router = Router()
    router.get("/ping", ping)
    router.use("/geojson", getGeojsonRoutes())
    return router
}

function ping(req, res) {
    return res.json({message:"ping"})
  }


module.exports = { getRoutes }