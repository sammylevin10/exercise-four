// Query one blogpost
const express = require("express");
const router = express.Router();

// Require Firebase
const firebase = require("firebase");
// Initialize firestore database
const db = firebase.firestore();
// Reference a specific collection
const blogposts = db.collection("blogposts");
// If there is no id provided send this message
router.get("/", (req, res) => res.send("No Id provided"));
// Get a post by the id
router.get("/:id", (req, res) => {
  // Get the query parameter from the url and set it to a variable
  const queryId = req.params.id;
  // Query the collection
  blogposts
    .doc(queryId) //Look up doc by id
    .get()
    .then(function (doc) {
      if (doc.exists) {
        return res.send(doc.data());
      } else {
        return res.send("No document exists");
      }
    })
    .catch(function (error) {
      return res.send(error);
    });
});

module.exports = router;
