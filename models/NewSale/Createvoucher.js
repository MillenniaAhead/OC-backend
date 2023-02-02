const mongoose = require("mongoose");
const { Schema } = mongoose;

const CreateVoucherSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
});

const CreateVoucher = mongoose.model("CreateVoucher", CreateVoucherSchema);

module.exports = {
  CreateVoucher,
};
