// Show one blogpost
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => res.send("A blogpost"));

module.exports = router;
