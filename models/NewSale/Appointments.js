const mongoose = require("mongoose");
const { Schema } = mongoose;

const AppointmentsSchema = new Schema({
  member: {
    type: String,
    require: true,
  },
  channel: {
    type: String,
    require: true,
  },
});

const Appointments = mongoose.model("Appointments", AppointmentsSchema);

module.exports = {
  Appointments,
};
