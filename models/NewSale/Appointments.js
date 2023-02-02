const mongoose = require("mongoose");
const { Schema } = mongoose;

const AppointmentsSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
});

const Appointments = mongoose.model("Appointments", AppointmentsSchema);

module.exports = {
  Appointments,
};
