const { updateMessage } = require("../services/messagesServices");

const editMessage = async (req, res) => {
  res.status(200).json(await updateMessage({ id: req.params.id }, req.body));
};

module.exports = editMessage;
