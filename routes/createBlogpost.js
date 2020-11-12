// Create blogpost
const express = require("express");
const router = express.Router();
// Require firebase
const firebase = require("firebase");
// Initialize firestore database
const db = firebase.firestore();
// Reference a specific collection
const blogposts = db.collection("blogposts");

const form = `
<form>
    <input type = "text" name = "title" placeholder = "Title of post" />
    <input type = "text" name = "text" placeholder = "Title of post" />
    <input type = "text" name = "author" placeholder = "Title of post" />
    <button type = "submit">Submit Post</buttom>
</form>
`;

router.get("/", (req, res) => res.send(form));

module.exports = router;
