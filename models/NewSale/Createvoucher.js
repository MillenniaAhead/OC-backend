const mongoose = require("mongoose");
const { Schema } = mongoose;

const CreateVoucherSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
    require: true,
  },
  retailPrice: {
    type: Number,
    require: true,
  },
  search: {
    type: String,
    require: true,
  },
});

const CreateVoucher = mongoose.model("CreateVoucher", CreateVoucherSchema);

module.exports = {
  CreateVoucher,
};
