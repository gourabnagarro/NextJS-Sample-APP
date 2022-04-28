const express = require('express')
const app = express()
const port = 8000
const data = require('./data.json')
const cors = require("cors")

let corsOption ={
    origin: 'http://localhost:3000'
}

app.use(cors(corsOption))
app.get('/data', (req, res) => {
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})