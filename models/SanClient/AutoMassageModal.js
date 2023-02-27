const mongoose = require("mongoose");
const { Schema } = mongoose;


const AutoMassageSchema = new Schema(
  {
    AutoMassage: {
      type: String,
      require: true,
    },
    
  },
  
);

const AutoMassage = mongoose.model("AutoMassages", AutoMassageSchema);

module.exports = {
    AutoMassage,
};
