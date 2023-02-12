const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReasonSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  name2: {
    type: String,
    require: true,
  },
  name3: {
    type: String,
    require: true,
  },
});

const Reason = mongoose.model("Reason", ReasonSchema);

module.exports = {
  Reason,
};
