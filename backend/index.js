// server/index.js
const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const createError = require("http-errors");

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

<script type="module" src="connection.js"></script>;
