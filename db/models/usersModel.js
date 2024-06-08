const { Schema, model } = require("mongoose");

const users = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    userID: {
      type: String,
      required: [true, "User ID is required"],
    },
    userIP: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
    },
    isBanned: {
      type: Boolean,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Users = model("users", users);

module.exports = Users;
