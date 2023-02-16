const mongoose = require("mongoose");
const { Schema } = mongoose;


const SanSetSalesSchema = new Schema(
  {
    invoiceTitle: {
      type: String,
      require: true,
      
    },
    customLine: {
      type: String,
      require: true,
      
    },
    customLine2: {
      type: String,
      require: true,
    },
    reciptFooter: {
      type: String,
      require:true,
    },
    
   
    
  },
  { timestamps: true } // save date info
);

const SanSetSales = mongoose.model("SanSetSales", SanSetSalesSchema);

module.exports = {
    SanSetSales,
};
