const mongoose = require("mongoose");
const { Schema } = mongoose;

const NewProductsSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
});

const NewProducts = mongoose.model("NewProducts", NewProductsSchema);

module.exports = {
  NewProducts,
};
