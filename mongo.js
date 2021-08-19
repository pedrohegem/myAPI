const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGOGB_URI, {
  useNewUrlParser: true,
  seUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})

const phoneSchema = new mongoose.Schema({
  name: String,
  number: String
})
