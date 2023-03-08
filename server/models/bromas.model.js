//hacer el requerimiento de mongoose

const mongoose = require("mongoose");

const UserSchemaBromas = mongoose.Schema({
  setup: String,
  punchline: String,
});

const Bromas = mongoose.model("Bromas", UserSchemaBromas);
module.exports = Bromas;
