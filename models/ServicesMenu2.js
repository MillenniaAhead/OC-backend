const mongoose = require("mongoose");
const { Schema } = mongoose

const servicesMenu2Schema = new Schema(
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

const ServicesMenu2 = mongoose.model("ServicesMenu2", servicesMenu2Schema);

module.exports = {
  ServicesMenu2 ,
};
