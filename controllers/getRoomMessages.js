const { getMessagesByLocation } = require("../services/messagesServices");

const getRoomMessages = async (req, res) => {
  console.log(req.query);
  return res.json(
    await getMessagesByLocation({ roomLocation: req.query.room })
  );
};

module.exports = getRoomMessages;
