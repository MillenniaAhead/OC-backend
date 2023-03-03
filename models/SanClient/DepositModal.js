const mongoose = require("mongoose");
const { Schema } = mongoose;


const DepositSchema = new Schema(
  {
    deposit: {
      type: String,
      require: true,
    },
    
  },
  
);

const Deposit = mongoose.model("Deposits", DepositSchema);

module.exports = {
    Deposit,
};
