const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.get('/', async(request, response) => {
  const data = await 

  response.json(data.map(d  => d.toJ)))
})

module.exports = app