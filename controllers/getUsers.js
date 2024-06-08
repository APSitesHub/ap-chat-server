const { getAllUsers } = require("../services/usersServices");

const getUsers = async (_, res) => {
  return res.json(await getAllUsers());
};

module.exports = getUsers;
