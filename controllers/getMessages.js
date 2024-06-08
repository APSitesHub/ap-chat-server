const { getAllMessages } = require("../services/messagesServices");

const getMessages = async (_, res) => {
  return res.json(await getAllMessages());
};

module.exports = getMessages;
