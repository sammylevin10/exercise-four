// Show all blogposts

const express = require("express");
const router = express.Router();
// Require firebase
const firebase = require("firebase");
// Initialize firestore database
const db = firebase.firestore();
// Reference a specific collection
const blogposts = db.collection("blogposts");

router.get("/", (req, res) => {
  // Inside of this arrow function we can do anything we want so long as we return at the end
  const blogpostsArray = [];
  blogposts
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        blogpostsArray.push(doc.data());
      });
      // Return array
      return res.send(blogpostsArray);
    })
    .catch(function (e) {
      console.warn("error", e);
      return res.send(error);
    });
});

module.exports = router;
