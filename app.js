const config = require('./utils/config')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const multer = require('multer')
const GridFsStorage = require('multer-gridfs-storage')
const Grid = require('gridfs-stream')
const methodOverride = require('method-override')
const crypto = require('crypto')
const path = require('path')

const app = express()
const cors = require('cors')



app.use(cors())
app.use(bodyParser.json())
app.use(methodOverride('_method'))

// const conn = mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
// .then(() => {
//   console.log('connected to MingoDB')
// })
// .catch((err) => {
//   console.log(error.message)
// })

const conn = mongoose.createConnection(process.env.MONGO_URI, 
  { useNewUrlParser: true } , {useUnifiedTopology: true });

let gfs;

conn.once('open', () => {
  const gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads')

  // all set!
})

const storage = new GridFsStorage({
  url: process.env.MONGO_URI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });



app.get('/', async(request, response) => {
  // const data = await 

  // response.json(data.map(d  => d.toJ)))
})

app.post('/upload', upload.single('file'), async (req, res) => {

//  const data = await upload.find({})
//  console.log(data)
const img = new Image()
  res.status(200).send(req.file)


})

module.exports = app