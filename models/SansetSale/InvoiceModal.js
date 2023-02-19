const mongoose = require("mongoose");
const { Schema } = mongoose;


const InvoiceSchema = new Schema(
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
    }
  }
);

const Invoice = mongoose.model("Invoice", InvoiceSchema);

module.exports = {
    Invoice,
};
