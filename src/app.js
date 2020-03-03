const express = require('express')
const ApiTools = require('./services/ApiTools')
const app = express()

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.get('/', ApiTools.getDataFromApi)

module.exports = app;
