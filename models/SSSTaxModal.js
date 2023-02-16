const mongoose = require("mongoose");
const { Schema } = mongoose;


const SSSTaxSchema = new Schema(
  {
    newTax: {
      type: Number,
      require: true,
    },
    priceExTax: {
      type: Number,
      require: true,
    },
    priceInTax: {
      type: Number,
      require: true,
    },
    
  },
  
);

const SSSTaxs = mongoose.model("SSSTaxs", SSSTaxSchema);

module.exports = {
    SSSTaxs,
};
