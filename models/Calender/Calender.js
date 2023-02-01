const mongoose = require("mongoose");
const { Schema } = mongoose;

const CalenderSchema = new Schema({
  description: {
    type: String,
    require: true,
  },
});

const Calender = mongoose.model("Calender", CalenderSchema);

module.exports = {
  Calender,
};
