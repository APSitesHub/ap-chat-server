const Users = require("../db/models/usersModel");

const getAllUsers = async () => await Users.find({});

const getOneUser = async (userID) => await Users.findOne(userID);

const newUser = async (body) => await Users(body).save();

const updateUser = async (userID, update) =>
  await Users.findOneAndUpdate(userID, update, { new: true });

module.exports = {
  getAllUsers,
  getOneUser,
  newUser,
  updateUser,
};
