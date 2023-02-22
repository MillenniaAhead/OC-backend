const mongoose = require("mongoose");
const { Schema } = mongoose;


const TaxSchema = new Schema(
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

const Taxs = mongoose.model("Taxs", TaxSchema);

module.exports = {
    Taxs,
};
