const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhysicalAddressSchema = new Schema({
  street: {
    type: String,
    required: true
  },
  suburb: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: Number,
    required: true
  },
  country: {
    type: String,
    default: "India"
  },
  sameAsPostalAddress: {
    type: Boolean,
    default: true
  }
});

const PhysicalAddress = mongoose.model("Address", PhysicalAddressSchema);

module.exports = PhysicalAddress;
