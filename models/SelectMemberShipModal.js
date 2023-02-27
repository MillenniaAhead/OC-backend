const mongoose = require("mongoose");
const { Schema } = mongoose;

const selectMemberShipModalSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const SelectMemberShipModal = mongoose.model("SelectMemberShipModal", selectMemberShipModalSchema);

module.exports = {
  SelectMemberShipModal,
  selectMemberShipModalSchema,
};
