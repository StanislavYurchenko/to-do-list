// const mongoose = require('mongoose')
// const mongoosePaginate = require('mongoose-paginate-v2')
// const { Schema, SchemaTypes, model } = mongoose

// const todoSchema = new Schema({
//   title: {
//     type: String,
//     required: [true, 'Email is require'],
//   },
//   description: {
//     type: String,
//     required: [true, 'Email is require'],
//   },
//   ready: {
//     type: Boolean,
//     required: false,
//   },
//   owner: {
//     type: SchemaTypes.ObjectId,
//     ref: 'user',
//   },
// }, { versionKey: false, timestamps: true })

// todoSchema.plugin(mongoosePaginate)

// const Todo = model('todo', todoSchema)
// // console.log('Todo',Todo);

// module.exports = Todo

const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const bcrypt = require('bcryptjs')
const { Schema, SchemaTypes } = mongoose

const { SUBSCRIPTIONS_TYPE, SALT_FACTOR } = require('../../utils/constants')

const todoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, 'Email is require'],
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  subscription: {
    type: String,
    enum: {
      values: Object.values(SUBSCRIPTIONS_TYPE),
      message: 'It is not allowed'
    },
    default: SUBSCRIPTIONS_TYPE.free
  },
  password: {
    type: String,
    required: [true, 'Password is require'],
  },
  owner: {
    type: SchemaTypes.ObjectId,
    ref: 'user',
  }
}, { versionKey: false, timestamps: true })

todoSchema.plugin(mongoosePaginate)

const Todo = mongoose.model('todo', todoSchema)

module.exports = Todo