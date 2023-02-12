const mongoose = require("mongoose");
const { Schema } = mongoose;

const NewProductsSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  code: {
    type: String,
    require: true,
  },
  ammount: {
    type: Number,
    require: true,
  },
  shortDescription: {
    type: String,
    require: true,
  },
  productDescription: {
    type: String,
    require: true,
  }, 
  supplyPrice: {
    type: Number,
    require: true,
  },
  retailPrice: {
    type: Number,
    require: true,
  },
  specialPrice: {
    type: Number,
    require: true,
  },
  markup: {
    type: Number,
    require: true,
  },
  sku: {
    type: String,
    require: true,
  },
  stockQuantity: {
    type: Number,
    require: true,
  },
  lowstocklevel: {
    type: Number,
    require: true,
  },
  reorderQuantity: {
    type: Number,
    require: true,
  },
});

const NewProducts = mongoose.model("NewProducts", NewProductsSchema);

module.exports = {
  NewProducts,
};
