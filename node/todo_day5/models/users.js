const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config();

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    // _id: Number,
    userName: {
      type: String,
      required: [true, 'Please enter user name'],
      // unique: true,
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
    email: {
      type: String,
      required: [true, 'Should enter the email'],
      unique: true,
    },

  },
  {
    timestamps: true,

    // this will be invoked when this oblect is stringfy like in res.json
    toJSON: {
      transform(doc, ret) {
      // eslint-disable-next-line no-param-reassign
        delete ret.password;
      },
    },
  },
);

// create pre function to hash password befor saving to DB
userSchema.pre('save', function preSave(next) {
  this.password = bcrypt.hashSync(this.password, parseInt(process.env.SALT_ROUNDS, 10));
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
