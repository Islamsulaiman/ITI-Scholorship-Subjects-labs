const mongoose = require('mongoose');
// const conn = require('../index');

// require and connect auto increment package
// eslint-disable-next-line import/order
// const autoIncrement = require('mongoose-sequence')(conn());

// const AutoIncrement = autoIncrement(connection);

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    // _id: Number,
    userName: {
      type: String,
      required: [true, 'Please enter user name'],
      unique: true,
      minlength: [8, 'User name min length is 8 chars'],
    },
    firstName: {
      type: String,
      required: [true, 'Please enter first name'],
      minlength: [3, 'minimum length for firstname is 3'],
      maxlength: [15, 'maximum length for firstname is 15'],
    },
    lastName: {
      type: String,
      required: [true, 'Please enter last name'],
      minlength: [3, 'minimum length for last name is 3'],
      maxlength: [15, 'maximum length for last name is 15'],
    },
    password: {
      type: String,
      minlength: [8, 'minimum password is 8 chars'],
      required: [true, 'please add password for the user'],
    },
    // all values are optional by default in mongodb
    dob: Date,

  },
  {
    timestamps: true,
  },
  // { // this line will force mongo to stop adding value for _id, autoincremnted later
  //   _id: false,
  // },
);

// userSchema.plugin(autoIncrement);

const User = mongoose.model('User', userSchema);

module.exports = User;
