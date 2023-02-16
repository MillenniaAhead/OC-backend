const mongoose = require("mongoose");
const { Schema } = mongoose;


const PaymentSchema = new Schema(
  {
    payment: {
      type: String,
      require: true,
    },
    
  },
  
);

const Payment = mongoose.model("Payments", PaymentSchema);

module.exports = {
    Payment,
};
