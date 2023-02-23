const mongoose = require("mongoose");
const { Schema } = mongoose;

const CheckoutSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
});

const Checkout = mongoose.model("Checkout", CheckoutSchema);

module.exports = {
  Checkout,
};
