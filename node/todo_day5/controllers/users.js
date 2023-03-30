const bcrypt = require('bcrypt');
const Users = require('../models');

const create = (data) => Users.users.create(data);
const get = () => Users.users.find({}, { firstName: 1, _id: 0 }).exec();
const deleteUser = (id) => Users.users.deleteOne({ _id: id });
const update = (id, newName) => Users.users.updateOne({ _id: id }, { userName: newName });
const login = async (password, email) => {
  // async function so await, it returns object with passwored key value
  const hashedPassword = await Users.users.findOne({ email }, { password: 1 }).exec();

  // compare
  const result = bcrypt.compareSync(password, hashedPassword.password);

  return result;
};

module.exports = {
  create,
  get,
  deleteUser,
  update,
  login,
};
