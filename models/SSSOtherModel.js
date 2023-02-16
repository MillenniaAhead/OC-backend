const mongoose = require("mongoose");
const { Schema } = mongoose;


const SSSOtherSchema = new Schema(
  {
    other: {
      type: String,
      require: true,
    },
    
  },
  
);

const SSSOther = mongoose.model("SSSOthers", SSSOtherSchema);

module.exports = {
    SSSOther,
};
