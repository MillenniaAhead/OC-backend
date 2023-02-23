const mongoose = require("mongoose");
const { Schema } = mongoose;

const VoucherSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  retailPrice: {
    type: Number,
    require: true,
  },
  voucherName: {
    type: String,
    require: true,
  },
});

const Voucher = mongoose.model("Voucher", VoucherSchema);

module.exports = {
  Voucher,
};
