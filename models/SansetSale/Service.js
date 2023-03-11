const mongoose = require("mongoose");
const { Schema } = mongoose;


const ServiceSchema = new Schema(
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
        type: String,
        require: true,
      },
      automatically: {
        type: String,
        require: true,
      },
      rateType: {
        type: Object,
        require: true,
      },
      taxRate: {
        type: String,
        require: true,
      },
    
  },
  
);

const Services = mongoose.model("Services", ServiceSchema);

module.exports = {
    Services,
};
