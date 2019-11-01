const config = require('./utils/config')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log('connected to MingoDB')
})
.catch((err) => {
  console.log(error.message)
})

app.use(bodyParser.json())

app.get('/', async(request, response) => {
  // const data = await 

  // response.json(data.map(d  => d.toJ)))
})

module.exports = app