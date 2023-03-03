const mongoose = require("mongoose");
const { Schema } = mongoose;


const TipSchema = new Schema(
  {
    tip1: {
      type: Number,
      require: true,
    },
    tip2: {
      type: Number,
      require: true,
    },
    tip3: {
      type: Number,
      require: true,
    },
    tip4: {
      type: Number,
      require: true,
    },
    tip5: {
      type: Number,
      require: true,
    },
    notip: {
      type: String,
      require: true,
    },
    
  },
  
);

const Tip = mongoose.model("Tips", TipSchema);

module.exports = {
    Tip,
};
