const mongoose = require("mongoose");
const { Schema } = mongoose;


const sanproductsSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
   
   
  },
  { timestamps: true } // save date info
);

const SanProducts = mongoose.model("SanProducts", sanproductsSchema);

module.exports = {
    SanProducts,
};
