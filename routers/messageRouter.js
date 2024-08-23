const express = require("express");
const router = express.Router();

const { getIndex, addMessage, getAddMessage } = require("../controllers/messageController");

router.get("/", getIndex);
router.post("/new", addMessage)
router.get("/new",getAddMessage)

module.exports = router;
