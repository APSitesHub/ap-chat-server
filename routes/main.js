const express = require("express");
const wakeUp = require("../controllers/wakeUp");
const addMessage = require("../controllers/addMessage");
const { validateMessage } = require("../schema/messageSchema");
const getMessages = require("../controllers/getMessages");
const getRoomMessages = require("../controllers/getRoomMessages");
const editMessage = require("../controllers/editMessage");
const { validateUser } = require("../schema/usersSchema");
const addUser = require("../controllers/addUser");
const editUser = require("../controllers/editUser");
const getUsers = require("../controllers/getUsers");
const getUser = require("../controllers/getUser");
const removeMessage = require("../controllers/removeMessage");

const router = express.Router();

router.get("/", wakeUp);

router.post("/messages", validateMessage, addMessage);

router.patch("/messages/:id", editMessage);

router.delete("/messages/:id", removeMessage);

router.get("/messages", getMessages);

router.get("/messages/room", getRoomMessages);

router.post("/users", validateUser, addUser);

router.patch("/users/:id", editUser);

router.get("/users", getUsers);

router.get("/users/:id", getUser);

module.exports = router;
