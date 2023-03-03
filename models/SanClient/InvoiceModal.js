const mongoose = require("mongoose");
const { Schema } = mongoose;


const InvoiceSchema = new Schema(
  {
    invoice: {
      type: String,
      require: true,
    },
    
  },
  
);

const Invoice = mongoose.model("Invoices", InvoiceSchema);

module.exports = {
    Invoice,
};
