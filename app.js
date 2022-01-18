const express = express()
const app = express()
app.use(express.json())




app.listen(PORT, () => console.log(`App running on port number:${PORT}`))


