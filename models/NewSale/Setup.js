const mongoose = require("mongoose");
const { Schema } = mongoose;

const SetupSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
});

const Setup = mongoose.model("Setup", SetupSchema);

module.exports = {
  Setup,
};
