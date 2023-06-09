const mongoose = require("mongoose");

async function dbConnector(fastify, options) {
  // Connection URL
  const mongoDBURL =
    "ADD MongoDb URL HERE";
  mongoose.connect(mongoDBURL);
}

module.exports = dbConnector;
