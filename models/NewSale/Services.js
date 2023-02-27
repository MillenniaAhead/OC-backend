const mongoose = require("mongoose");
const { Schema } = mongoose;

const ServicesSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
});

const Services = mongoose.model("Services2", ServicesSchema);

module.exports = {
  Services,
};
