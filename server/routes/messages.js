const express = require("express");
const router = express.Router({mergeParams: true});

const { createMessage, getMessage, deleteMessage } = require("../handlers/messages");

// prefix = /api/users/:id/messages
router.route("/").post(createMessage);

// prefic = /api/users/:id/messages/message_id
router.route("/:message_id").get(getMessage);
router.route("/:message_id").delete(deleteMessage);

module.exports = router;