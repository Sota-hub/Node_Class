const mongoose = require("mongoose")
const { Schema, model, SchemaTypes } = mongoose

const commentSchema = new Schema({
  user: {
    type: SchemaTypes.ObjectId,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  blog: {
    type: SchemaTypes.ObjectId,
    required: true
  },
  date: {
    type: Date,
        default: () => Date.now(),
    immutable: true
  }
})

const Comment = model('Comment', commentSchema)
module.exports = Comment