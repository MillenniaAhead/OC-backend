const mongoose = require("mongoose");
const { Schema } = mongoose;


const AddPaySchema = new Schema(
  {
    payment: {
      type: Number,
      require: true,
    },
    
  },
  
);

const AddPay = mongoose.model("AddPays", AddPaySchema);

module.exports = {
    AddPay,
};
