// Create blogpost
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => res.send("Create blogpost"));

module.exports = router;
