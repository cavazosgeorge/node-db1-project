const express = require("express");

const server = express();

server.use(express.json());

server.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "not found",
  });
});

module.exports = server;
