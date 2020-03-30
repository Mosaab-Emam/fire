const mongoose = require("mongoose");

const PlaceHolderSchema = mongoose.Schema({
  name: {
    type: String
  }
});

module.exports = mongoose.model("PlaceHolder", PlaceHolderSchema);
