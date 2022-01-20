const { Router } = require("express")
// Require sperarte route files here
const {getGeojsonRoutes} = require("./geojson")


function getRoutes() {
    const router = Router()
    router.use("/geojson", getGeojsonRoutes())
    return router
}


module.exports = { getRoutes }