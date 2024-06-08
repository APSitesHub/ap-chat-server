const { newMessage } = require("../services/messagesServices");

const addMessage = async (req, res) => {
  console.log(req.body);
  res.status(201).json(await newMessage(req.body));
};

module.exports = addMessage;
