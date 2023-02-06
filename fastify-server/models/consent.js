const mongoose = require("mongoose");

let ConsentSchema = new mongoose.Schema({
  timestamp: String,
  ipaddr: String,
  geoloc: String,
  consentval: String,
});

module.exports = mongoose.model("Consent", ConsentSchema);
