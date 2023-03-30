const Users = require('../models');

const create = (data) => Users.users.create(data);
const get = () => Users.users.find({}, { firstName: 1, _id: 0 }).exec();
const deleteUser = (id) => Users.users.deleteOne({ _id: id });
const update = (id, newName) => Users.users.updateOne({ _id: id }, { userName: newName });

module.exports = {
  create,
  get,
  deleteUser,
  update,
};
