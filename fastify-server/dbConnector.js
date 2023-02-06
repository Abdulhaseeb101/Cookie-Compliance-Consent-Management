const mongoose = require("mongoose");

async function dbConnector(fastify, options) {
  // Connection URL
  const mongoDBURL =
    "mongodb+srv://strangecat:jA7OwMJhALQhp8H6@cookieconsentdb.dhesh1t.mongodb.net/?retryWrites=true&w=majority";
  mongoose.connect(mongoDBURL);
}

module.exports = dbConnector;
