const mongoose = require("mongoose");
const { Schema } = mongoose;


const inventoryCardSchema = new Schema(
  {
    sku: {
      type: String,
      require: true,
    },
    success: {
      type: String,
      require: true,
    },
    currentstock: {
      type: String,
      require: true,
    },
    successCheck: {
      type: String,
      require: true,
    },
    lowstocke: {
      type: Number,
      require: true,
    },
    
    recordquantity: {
      type: Number,
      require: true,
    },
   
   
  },
  { timestamps: true } // save date info
);

const inventoryCard= mongoose.model("inventoryCard",inventoryCardSchema);

module.exports = {
    inventoryCard ,
};
