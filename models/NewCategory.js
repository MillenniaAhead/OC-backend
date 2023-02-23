const mongoose = require("mongoose");
const { Schema } = mongoose;

const newCategorySchema = new Schema(
  {
    category_name: {
      type: String,
      require: true,
    },
    category_description: {
        type: String,
        require: true,
      },
  },
  { timestamps: true } // save date info
);

const NewCategory = mongoose.model("NewCategory", newCategorySchema);

module.exports = {
  NewCategory ,
};
