const mongoose = require("mongoose");
const { Schema } = mongoose;


const CashSchema = new Schema(
  {
    cash: {
      type: Number,
      require: true,
    },
    
  },
  
);

const Cash = mongoose.model("Cashs", CashSchema);

module.exports = {
    Cash,
};
