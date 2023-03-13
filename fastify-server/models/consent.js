const mongoose = require("mongoose");

let ConsentSchema = new mongoose.Schema({
  //_id: String,
  timestamp: String,
  ipaddr: String,
  geoloc: String,
  consentval: Object,
});

module.exports = mongoose.model("Consent", ConsentSchema);
