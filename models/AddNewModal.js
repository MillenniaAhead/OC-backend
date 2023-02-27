const mongoose = require("mongoose");
const { Schema } = mongoose;

const addNewModalSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const AddNewModal = mongoose.model("AddNewModal", addNewModalSchema);

module.exports = {
  AddNewModal,
  addNewModalSchema,
};
