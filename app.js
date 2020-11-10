const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

// Configuration values for firebase
const firebaseConfig = {
  apiKey: "AIzaSyAIjoH5jpQ-rBNXORGK7brAqEFhpzAfquU",
  authDomain: "exercise-four-98fad.firebaseapp.com",
  databaseURL: "https://exercise-four-98fad.firebaseio.com",
  projectId: "exercise-four-98fad",
  storageBucket: "exercise-four-98fad.appspot.com",
  messagingSenderId: "1650033633",
  appId: "1:1650033633:web:67d324bf0c0dfdcff808a0",
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
app.use("/", postRoute);
app.use("/", createRoute);

app.listen(port, () =>
  console.log(`Exercise Four is running at localhost:${port}`)
);
