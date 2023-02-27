const mongoose = require("mongoose");
const { Schema } = mongoose;

const addCatModSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const AddCatMod = mongoose.model("AddCatMod", addCatModSchema);

module.exports = {
  AddCatMod,
  addCatModSchema,
};
