const express = require("express");

const { validateAdminUser } = require("../schema/adminsSchema");
const addAdmin = require("../controllers/addAdmin");
const getLinkAdmin = require("../controllers/getLinkAdmin");
const auth = require("../middlewares/streams/auth");
const loginAdmin = require("../controllers/loginAdmin");

const router = express.Router();

router.get("/", auth, getLinkAdmin);

router.post("/new", validateAdminUser, addAdmin);

router.post("/login", validateAdminUser, loginAdmin);

module.exports = router;
