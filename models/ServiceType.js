const mongoose = require("mongoose");
const { Schema } = mongoose;

const serviceTypeSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    }
  },
  { timestamps: true } // save date info
);

const ServiceType = mongoose.model("ServiceType", serviceTypeSchema);

module.exports = {
  ServiceType ,
};
