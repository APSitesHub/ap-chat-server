const { Schema, model } = require("mongoose");

const messages = new Schema(
  {
    text: {
      type: String,
      required: [true, "Message text is required"],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    id: {
      type: String,
      required: [true, "Message ID is required"],
    },
    userID: {
      type: String,
    },
    userIP: {
      type: String,
    },
    socketID: {
      type: String,
      required: [true, "Socket ID is required"],
    },
    roomLocation: {
      type: String,
      required: [true, "Room Location is required"],
    },
    isPinned: {
      type: Boolean,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Messages = model("messages", messages);

module.exports = Messages;
