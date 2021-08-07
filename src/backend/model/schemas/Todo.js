const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const bcrypt = require('bcryptjs')
const { Schema, SchemaTypes } = mongoose

const { SUBSCRIPTIONS_TYPE, SALT_FACTOR } = require('../../utils/constants')

const todoSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is require'],
  },
  description: String,
  ready: Boolean,
  owner: {
    type: SchemaTypes.ObjectId,
    ref: 'user',
  }
}, { versionKey: false, timestamps: true })

todoSchema.plugin(mongoosePaginate)

const Todo = mongoose.model('todoe', todoSchema)

module.exports = Todo