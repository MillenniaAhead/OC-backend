const mongoose = require("mongoose");
const { Schema } = mongoose;

const categoryModSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const CategoryMod = mongoose.model("CategoryMod", categoryModSchema);

module.exports = {
  CategoryMod,
  categoryModSchema,
};
