const mongoose = require("mongoose");
const { Schema } = mongoose;


const basicInfoSchema = new Schema(
  {
    productname: {
      type: String,
      require: true,
    },
    productbarcode: {
      type: String,
      require: true,
    },
    measure: {
      type: String,
      require: true,
    },
    amount: {
      type: Number,
      require: true,
    },
    shortdesc: {
      type: String,
      require: true,
    },
    
    productdesc: {
      type: String,
      require: true,
    },
   
   
  },
  { timestamps: true } // save date info
);

const basicInfo = mongoose.model("BasicInfo",basicInfoSchema);

module.exports = {
    basicInfo ,
};
