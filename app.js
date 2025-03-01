const path = require("path");

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/contact-me", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "public", "contact-me.html"));
});

app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
