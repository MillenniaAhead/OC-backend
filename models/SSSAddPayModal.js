const mongoose = require("mongoose");
const { Schema } = mongoose;


const SSSAddPaySchema = new Schema(
  {
    payName: {
      type: Number,
      require: true,
    },
    
  },
  
);

const SSSAddPay = mongoose.model("SSSAddPays", SSSAddPaySchema);

module.exports = {
    SSSAddPay,
};
