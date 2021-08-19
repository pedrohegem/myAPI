const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

/* const person = new Person({
  name: 'Joan',
  number: '2342321523'
})

person.save().then(result => {
  console.log('phone saved!')
  mongoose.connection.close()
}) */

Person.find({}).then(result => {
  result.forEach(p => {
    console.log(p)
  })
  mongoose.connection.close()
})
