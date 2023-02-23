const mongoose = require("mongoose");
const { Schema } = mongoose;

const selectBrandSchema = new Schema(
  {
    search: {
      type: String,
      require: true,
    }
  },
  { timestamps: true } // save date info
);

const SelectBrand= mongoose.model("SelectBrand", selectBrandSchema);

module.exports = {
  SelectBrand,
};
