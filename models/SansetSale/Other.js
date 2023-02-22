const mongoose = require("mongoose");
const { Schema } = mongoose;


const OtherSchema = new Schema(
  {
    other: {
      type: String,
      require: true,
    },
    
  },
  
);

const Other = mongoose.model("Others", OtherSchema);

module.exports = {
    Other,
};
