const mongoose = require('mongoose');

const SupplierdetailsSchema = new mongoose.Schema({
  suppliername: {
    type: String,
    required: true,
  },
  Productdescription: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('upplierdetails', SupplierdetailsSchema);
