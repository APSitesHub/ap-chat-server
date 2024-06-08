const { updateUser } = require("../services/usersServices");

const editUser = async (req, res) => {
  res.status(200).json(await updateUser({ userID: req.params.id }, req.body));
};

module.exports = editUser;
