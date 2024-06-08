const { getOneUser } = require("../services/usersServices");

const getUser = async (req, res) => {
  return res.json(await getOneUser({ userID: req.params.id }));
};

module.exports = getUser;
