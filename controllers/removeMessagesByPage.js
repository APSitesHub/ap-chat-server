const { deleteMessagesByPage } = require("../services/messagesServices");

const removeMessagesByPage = async (req, res) =>
  res
    .status(204)
    .json(await deleteMessagesByPage({ roomLocation: req.query.page }));

module.exports = removeMessagesByPage;
