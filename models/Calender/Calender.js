const mongoose = require("mongoose");
const { Schema } = mongoose;

const CalenderSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
});

const Calender = mongoose.model("Calender", CalenderSchema);

module.exports = {
  Calender,
};
