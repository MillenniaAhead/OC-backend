const mongoose = require("mongoose");
const { Schema } = mongoose;

const servicesMenuSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    amount: {
      type: String,
      require: true,
    }
  },
  { timestamps: true } // save date info
);

const ServicesMenu = mongoose.model("ServicesMenu", servicesMenuSchema);

module.exports = {
  ServicesMenu ,
};
