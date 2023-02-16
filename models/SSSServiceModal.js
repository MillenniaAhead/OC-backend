const mongoose = require("mongoose");
const { Schema } = mongoose;


const SSSServiceSchema = new Schema(
  {
    name: {
        type: String,
        require: true,
      },
    dec: {
        type: String,
        require: true,
      },
      apply: {
        type: Boolean,
        require: true,
      },
      rateType: {
        type: Boolean,
        require: true,
      },
      taxRate: {
        type: String,
        require: true,
      },
    
  },
  
);

const SSSServices = mongoose.model("SSSServices", SSSServiceSchema);

module.exports = {
    SSSServices,
};
