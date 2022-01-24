const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const app = express();

// Middleware
require("./configurations/middleware")(app);

// Routes
const { getRoutes } = require("./routes/index");
app.use("/api", getRoutes());

// Database connection
require('./configurations/database')

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
