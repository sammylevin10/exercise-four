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
<form action="/create/submit">
    <input type = "text" name = "title" placeholder = "Title of post" />
    <input type = "text" name = "text" placeholder = "Title of post" />
    <input type = "text" name = "author" placeholder = "Title of post" />
    <button type = "submit">Submit Post</buttom>
</form>
`;

// Default route serves form
router.get("/", (req, res) => res.send(form));

// Route for submitting the form
router.get("/submit", (req, res) => {
  const queryParams = req.query;
  // Custom IDs for our posts
  // Using Regex to process our title string into an id
  const idFromTitle = queryParams.title.replace(/\s+/g, "-").toLowerCase();
  blogposts
    .doc(idFromTitle) // Allows you to create new posts or update them
    .set(queryParams) //?title=text&text=text&author=text
    .then(function (doc) {
      res.send("Successful submission");
    })
    .catch(function (error) {
      console.log("error", error);
      res.send("Failed submission");
    });
});

module.exports = router;
