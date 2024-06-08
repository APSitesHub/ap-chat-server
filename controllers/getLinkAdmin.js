const { getAdmin } = require("../services/adminsServices");

const getLinkAdmin = async (_, res) => {
  return res.json(await getAdmin());
};

module.exports = getLinkAdmin;
