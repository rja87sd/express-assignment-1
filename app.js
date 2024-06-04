// Credit to ChatGPT for assistance and code comments.

const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());

// GET /
app.get("/", (req, res) => {
  res.send("Welcome to the Express server!");
});

// GET /about
app.get("/about", (req, res) => {
  res.send("This is the about page.");
});

// POST /data
app.post("/data", (req, res) => {
  res.json(req.body);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
