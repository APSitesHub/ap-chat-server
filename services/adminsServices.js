const Admins = require("../db/models/adminsModel");

const getAdmin = async () => await Admins.findOne({});

const newAdmin = async (body) => await Admins(body).save();

const signInAdmin = async (id, body) =>
  await Admins.findByIdAndUpdate(id, body, { new: true });

module.exports = {
  getAdmin,
  newAdmin,
  signInAdmin,
};
