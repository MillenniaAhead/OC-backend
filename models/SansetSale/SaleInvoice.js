const mongoose = require("mongoose");
const { Schema } = mongoose;


const SaleInvoiceSchema = new Schema(
  {
    no: {
      type: Number,
      require: true,
      
    },
    number: {
      type: Number,
      require: true,
      
    }
  }
);

const SaleInvoice = mongoose.model("SaleInvoice", SaleInvoiceSchema);

module.exports = {
    SaleInvoice,
};
