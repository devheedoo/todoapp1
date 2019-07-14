const mongoose = require('mongoose');

const { Schema } = mongoose;
const todoSchema = new Schema({
  seq: {
    type: Number,
    required: true,
    unique: true,
    default: 0,
  },
  task: String,
  deadline: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  archieved: {
    type: Boolean,
    default: false,
  },
  archievedAt: Date,
  deleted: {
    type: Boolean,
    default: false,
  },
  deletedAt: Date,
});

module.exports = mongoose.model('Todo', todoSchema);