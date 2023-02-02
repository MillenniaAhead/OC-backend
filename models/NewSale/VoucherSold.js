const mongoose = require("mongoose");
const { Schema } = mongoose;

const VoucherSoldSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
});

const VoucherSold = mongoose.model("VoucherSold", VoucherSoldSchema);

module.exports = {
  VoucherSold,
};
