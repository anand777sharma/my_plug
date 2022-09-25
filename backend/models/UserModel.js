const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
  name: String,
  email: String,
  password: String,
  createdAt: Date
})

module.exports = model('userCollection', mySchema);