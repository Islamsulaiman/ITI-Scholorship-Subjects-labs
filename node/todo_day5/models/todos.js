const mongoose = require('mongoose');

const { Schema } = mongoose;

const todoSchema = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    title: {
      type: String,
      required: [true, 'Todo title is required'],
      minLength: [5, 'to low'],
      maxLength: [20, 'Easy maaaan this is not a song!!'],
    },
    status: {
      type: String,
      default: 'to-do',
      enum: ['to-do', 'in-progress', 'done'],
    },

  },
  // timestamps is added to options object, will keep track of creation date and update date
  { timestamps: true },
);

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
