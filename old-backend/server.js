const express = require("express");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dbConfig = require("./database/db");
const createError = require("http-errors");
require("./middleware/auth");
const dotenv = require("dotenv").config();
const User = require("./models/User");

const SESSION_SECRET = process.env.SESSION_SECRET;

// Express Route
const propertyRoute = require("./routes/property.route");
// const userRoute = require("./routes/user.route");

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log("Database sucessfully connected!");
    },
    (error) => {
      console.log("Could not connect to database : " + error);
    }
  );

const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
};

const app = express();

// Session Middleware + Passport Middleware
app.use(
  session({ secret: SESSION_SECRET, resave: false, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Bodyparser for idk what
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// CORS because CORS is annoying
app.use(cors());

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/google/failure",
    successRedirect: "/auth/google/success",
  })
);

app.get("/auth/google/success", isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.displayName}`);
});

app.get("/auth/google/failure", (req, res) => {
  res.send("Authentication failed. We can't find you.");
});

// app.get("/create-listing", (req, res) => {
//   // go to create-listing React component
// });

app.get("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.send("Logged out. Never come back... jk :)");
});

app.use("/properties", cors(), propertyRoute);
// app.use("/users", cors(), userRoute);

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, "127.0.0.1", () => {
  console.log("Connected to port " + port);
});

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
