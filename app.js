const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

// Configuration values for firebase
const firebaseConfig = {
  apiKey: "AIzaSyBII0Eze8rKcyWaeUjX7CaAvzN0Ko7LgHQ",
  authDomain: "exercise-four-bb1b5.firebaseapp.com",
  databaseURL: "https://exercise-four-bb1b5.firebaseio.com",
  projectId: "exercise-four-bb1b5",
  storageBucket: "exercise-four-bb1b5.appspot.com",
  messagingSenderId: "331846027737",
  appId: "1:331846027737:web:0ac2d7adb7e61cf94a71c8",
};

//Firebase connection
const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);

// Routes Import
const indexRoute = require("./routes/index.js");
const postRoute = require("./routes/post.js");
const createRoute = require("./routes/createBlogpost.js");
// Routes
app.use("/", indexRoute);
app.use("/post", postRoute);
app.use("/create", createRoute);

app.listen(port, () =>
  console.log(`Exercise Four is running at localhost:${port}`)
);
