const mongoose = require("mongoose");
const { Schema } = mongoose;


const SSSCashSchema = new Schema(
  {
    cash: {
      type: Number,
      require: true,
    },
    
  },
  
);

const SSSCash = mongoose.model("SSSCashs", SSSCashSchema);

module.exports = {
    SSSCash,
};
