const mongoose = require("mongoose");
const { Schema } = mongoose;

const selectCategorySchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    }
  },
  { timestamps: true } // save date info
);

const SelectCategory = mongoose.model("SelectCategory", selectCategorySchema);

module.exports = {
  SelectCategory ,
};
