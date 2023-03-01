const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pricingSchema = new Schema({
  supplyPrice: {
    type: Number,
    required: true
  },
  retailSales: {
    type: Boolean,
    default: false
  },
  retailPrice: {
    type: Number,
    required: true
  },
  specialPrice: {
    type: Number
  },
  markup: {
    type: Number
  },
  tax: {
    type: String,
    default: 'No tax'
  },
  teamMemberCommission: {
    type: Boolean,
    default: false
  }
});

const Pricing = mongoose.model('Pricing', pricingSchema);

module.exports = Pricing;
