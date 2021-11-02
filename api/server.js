const express = require("express");

const accountsRouter = require("./accounts/accounts-router");

const server = express();

// JSON BODY PARSER
server.use(express.json());

// IMPORT ROUTES HERE
server.use("/api/accounts/", accountsRouter);

// GLOBAL ROUTE HANDLER
server.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "not found",
  });
});

module.exports = server;
